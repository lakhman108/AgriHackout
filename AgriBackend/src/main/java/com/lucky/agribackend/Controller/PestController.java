package com.lucky.agribackend.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lucky.agribackend.Service.PestsService;
import com.lucky.agribackend.entity.Pest;

@RestController
@RequestMapping("/pests")
public class PestController {

    @Autowired
    private PestsService pestsService;
    
    @GetMapping("/all")
    public Map<Integer,Pest> getAllPests() {
        return pestsService.getAllPests();
    }

    @GetMapping("/{pestId}")
    public Pest getPestById(@PathVariable int pestId) {
        return pestsService.getPestById(pestId);
    }

    @PostMapping("/add")
    public Pest addPest(@RequestBody Pest pest) {
        return pestsService.addPest(pest);
    }
    @PutMapping("/update/{pestId}")
    public Pest updatePest(@RequestBody Pest pest, @PathVariable int pestId) {
        return pestsService.updatePest(pest);
    }
    @DeleteMapping("/delete/{pestId}")
    public void deletePest(@PathVariable int pestId) {
        pestsService.deletePest(pestId);
    }
    
    
}
