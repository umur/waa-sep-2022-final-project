package edu.miu.waa.propertymangement.controller;

import edu.miu.waa.propertymangement.dto.PropertyDto;
import edu.miu.waa.propertymangement.service.FileStorageService;
import edu.miu.waa.propertymangement.service.PropertyService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Path;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("properties")
@AllArgsConstructor
@CrossOrigin
@RestController
public class PropertyController {
    @Autowired
    private PropertyService propertyService;

    @GetMapping("/list/filter")
    public List<PropertyDto> getPropertyWithFilter(@RequestParam(defaultValue = "rent") String propertyType,@RequestParam(defaultValue = "0") Integer numberOfRooms,
                                         @RequestParam(defaultValue = "apartment") String homeType, @RequestParam(defaultValue = "") String location,
                                         @RequestParam(defaultValue = "0") Integer rentAmount){

        return  propertyService.getPropertyWithFilter(propertyType,numberOfRooms,homeType,location,rentAmount);
    }
    @GetMapping("")
    public List<PropertyDto> getProperty(){
        return  propertyService.getProperty();
    }
    @GetMapping("/filter/last-rented")
    public List<PropertyDto> getLastRentedProperty(){
        return  propertyService.getLastRentedProperties();
    }

    @GetMapping("/{id}")
    public PropertyDto getPropertyById(@PathVariable String id) {
        return propertyService.getPropertyById(id);
    }


    @Autowired
    private FileStorageService fileStorageService;

//    @PostMapping( consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE }, value = "uploadImage")
//    public ResponseEntity<PropertyDto> create(
//            @RequestPart("property") PropertyDto propertyDto,
//            @RequestPart("file") List<MultipartFile> files) throws Exception {
//        propertyDto = propertyService.save(propertyDto, files);
//        return ResponseEntity.ok(propertyDto);
//    }

//    @RolesAllowed({"Admin", "Owner"})
    @PostMapping
    public ResponseEntity<PropertyDto> createProperty(@RequestBody PropertyDto propertyDto) {
        PropertyDto response = propertyService.saveProperty(propertyDto);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PropertyDto> createProperty(@PathVariable String id, @RequestBody PropertyDto propertyDto) {
        PropertyDto response = propertyService.saveProperty(propertyDto);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable String id) {
        propertyService.deleteProperty(id);
    }


    @PostMapping("/imgUpload")
    public ResponseEntity<String> uploadPropertyImage(@RequestParam("file") MultipartFile file) {
        String fileName = "";
        try {
            fileName = fileStorageService.storeFile(file);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(fileName);
    }


    @PostMapping("/imgUploads")
    public ResponseEntity<List<String>> uploadPropertyImage(@RequestParam("files") MultipartFile[] files) {
        List<MultipartFile> fileListMultipart = Arrays.asList(files);

        List<String> fileList = fileListMultipart.stream().map((file -> {
            return fileStorageService.storeFile(file);
        })).collect(Collectors.toList());

        return ResponseEntity.ok(fileList);
    }


}
