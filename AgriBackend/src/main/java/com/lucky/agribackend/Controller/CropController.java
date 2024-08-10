package com.lucky.agribackend.Controller;

import com.lucky.agribackend.Service.CropService;
import com.lucky.agribackend.entity.Crop;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/crops")
public class CropController {

    @Autowired
    private CropService cropService;

    @GetMapping("/all")
    public String searchallCrops() {

        return cropService.searchallCrops();
    }

    @GetMapping("/search/{keyword}")
    public ResponseEntity<List<Crop>> searchCrops(@PathVariable String keyword) {
        List<Crop> crops = cropService.searchCrops(keyword);
        return ResponseEntity.ok(crops);
    }

    @PostMapping
    public ResponseEntity<Crop> createCrop(@RequestBody Crop crop) {
        Crop createdCrop = cropService.createCrop(crop);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCrop);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Crop> updateCrop(@PathVariable int id, @RequestBody Crop crop) {
        crop.setId(id);
        Crop updatedCrop = cropService.updateCrop(crop);
        return ResponseEntity.ok(updatedCrop);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCrop(@PathVariable int id) {
        cropService.deleteCrop(id);
        return ResponseEntity.noContent().build();
    }
}
