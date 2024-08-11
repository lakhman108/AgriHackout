package com.lucky.agribackend.Controller;

import com.lucky.agribackend.Service.CropDiseasePesticiderService;
import com.lucky.agribackend.Service.CropService;
import com.lucky.agribackend.entity.Crop;
import com.lucky.agribackend.entity.CropDiseasePesticide;
import com.lucky.agribackend.entity.Disease;

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
        return cde.findDiseaseIdsByCropId(id);

    }
}
