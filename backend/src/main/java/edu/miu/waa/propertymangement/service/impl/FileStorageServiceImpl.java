package edu.miu.waa.propertymangement.service.impl;

import edu.miu.waa.propertymangement.service.FileStorageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
@Slf4j
public class FileStorageServiceImpl implements FileStorageService {

    @Autowired
    ResourceLoader resourceLoader;




    @Override
    public String storeFile(MultipartFile file) {




//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        String fileName = file.getOriginalFilename();

        try {
            Resource resource = resourceLoader.getResource("classpath:/static");
//            ClassPathResource classPathResource = new ClassPathResource("classpath:data.sql");
//            classPathResource.getFile().getAbsolutePath();
//            String fileTargetLocation = resource.getFile().getAbsolutePath();
            String fileTargetLocation = resource.getFile().getAbsolutePath();
            fileTargetLocation = StringUtils.cleanPath(fileTargetLocation);

            log.info("file target location " + fileTargetLocation);
            fileName = System.currentTimeMillis() + "_"+ fileName;
            log.info("File name" + fileName);
            Path target = Paths.get(fileTargetLocation + "/" + fileName);

            log.info("target location " + target.toString());

            Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

            return ServletUriComponentsBuilder.fromCurrentContextPath().path("/static/").path(fileName).toUriString();

        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return null;
    }
}
