package com.lucky.agribackend.Controller;

import com.lucky.agribackend.Service.CropDiseasePesticiderService;
import com.lucky.agribackend.Service.CropService;
import com.lucky.agribackend.entity.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cropdiseasepesticide")
public class CropDiseasePesticideController {

@Autowired
private CropDiseasePesticiderService cde;

    @GetMapping("{id}")
    public List<Disease> findbycropid(@PathVariable int id) {

        List<Disease> some=cde.findDiseaseIdsByCropId(id);
        for (Disease d:some) {
            d.setCropDiseasePesticides(null);
        }
        return some;

    }

    @PostMapping("{cropid}")
    public List<PesticideDTO> findRelatedPesticides(@RequestBody List<Integer> diseases, @PathVariable Integer cropid){
        return cde.findrelatedpesticides(cropid,diseases);
    }
}
