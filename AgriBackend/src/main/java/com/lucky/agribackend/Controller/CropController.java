package com.lucky.agribackend.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lucky.agribackend.Service.CropsService;
import com.lucky.agribackend.entity.Crop;

@RestController
@RequestMapping("/crops")
public class CropController {
    
    @Autowired
    CropsService cropService;

    @GetMapping("/all")
    public Map<Integer,Crop> getAllCrops() {
        return cropService.getAllCrops();
    }

    @GetMapping("/{cropId}")
    public Crop getCropById(@PathVariable int cropId) {
        return cropService.getCropById(cropId);
    }

    @PostMapping("/add")
    public Crop addCrop(@RequestBody Crop crop) {
        return cropService.addCrop(crop);
    }
    // @PostMapping("/update")
    // public String updateCrop() {
    //     return cropService.updateCrop().toString();
    // }
}
