package com.lucky.agribackend.Controller;


import com.lucky.agribackend.Service.PesticideService;
import com.lucky.agribackend.entity.Pesticide;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/pesticides")
public class PesticideController {

    @Autowired
    private PesticideService pesticideService;

    @GetMapping("/search/{keyword}")
    public ResponseEntity<List<Pesticide>> searchPesticides(@PathVariable String keyword) {
        List<Pesticide> pesticides = pesticideService.searchPesticides(keyword);
        return ResponseEntity.ok(pesticides);
    }

    @PostMapping
    public ResponseEntity<Pesticide> createPesticide(@RequestBody Pesticide pesticide) {
        Pesticide createdPesticide = pesticideService.createPesticide(pesticide);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPesticide);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pesticide> updatePesticide(@PathVariable int id, @RequestBody Pesticide pesticide) {
        pesticide.setId(id);
        Pesticide updatedPesticide = pesticideService.updatePesticide(pesticide);
        return ResponseEntity.ok(updatedPesticide);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePesticide(@PathVariable int id) {
        pesticideService.deletePesticide(id);
        return ResponseEntity.noContent().build();
    }
}
