package com.property.service;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.property.dto.PhotoMeta;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class S3BucketStorageService {

    private final AmazonS3 s3client;

    @Value("${application.bucket.name}")
    private String bucketName;

    public List<PhotoMeta> uploadFiles(String prefix, List<MultipartFile> files) {
        log.info("Uploading images of size {}", files.size());
        List<PhotoMeta> photoMetas = new ArrayList<>();
        for(MultipartFile file: files){
            try {
                String key = prefix+ File.separator+ file.getName();
                ObjectMetadata metadata = new ObjectMetadata();
                metadata.setContentLength(file.getSize());
                s3client.putObject(bucketName,key , file.getInputStream(), metadata);
                photoMetas.add(new PhotoMeta(s3client.getUrl(bucketName, key).toString(), key));
            }  catch (AmazonServiceException serviceException) {
                log.info("AmazonServiceException: "+ serviceException.getMessage());
                throw serviceException;
            } catch (AmazonClientException clientException) {
                log.info("AmazonClientException Message: " + clientException.getMessage());
                throw clientException;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return photoMetas;
    }

    public ByteArrayOutputStream downloadImage(String keyName) {
        try {
            S3Object s3object = s3client.getObject(new GetObjectRequest(bucketName, keyName));

            InputStream is = s3object.getObjectContent();
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            int len;
            byte[] buffer = new byte[4096];
            while ((len = is.read(buffer, 0, buffer.length)) != -1) {
                outputStream.write(buffer, 0, len);
            }
            return outputStream;
        } catch (IOException ioException) {
            log.error("IOException: " + ioException.getMessage());
        } catch (AmazonServiceException serviceException) {
            log.info("AmazonServiceException Message:    " + serviceException.getMessage());
            throw serviceException;
        } catch (AmazonClientException clientException) {
            log.info("AmazonClientException Message: " + clientException.getMessage());
            throw clientException;
        }
        return null;
    }


}
