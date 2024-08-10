package com.lucky.agribackend.Controller;

import com.lucky.agribackend.Service.DiseaseService;
import com.lucky.agribackend.entity.Disease;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/diseases")
public class DiseaseController {

    @Autowired
    private DiseaseService diseaseService;

    @GetMapping("/search/{keyword}")
    public ResponseEntity<List<Disease>> searchDiseases(@PathVariable String keyword) {
        List<Disease> diseases = diseaseService.searchDiseases(keyword);
        return ResponseEntity.ok(diseases);
    }

    @PostMapping
    public ResponseEntity<Disease> createDisease(@RequestBody Disease disease) {
        Disease createdDisease = diseaseService.createDisease(disease);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDisease);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Disease> updateDisease(@PathVariable int id, @RequestBody Disease disease) {
        disease.setId(id);
        Disease updatedDisease = diseaseService.updateDisease(disease);
        return ResponseEntity.ok(updatedDisease);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDisease(@PathVariable int id) {
        diseaseService.deleteDisease(id);
        return ResponseEntity.noContent().build();
    }
}