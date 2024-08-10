package com.lucky.agribackend.Service;

import com.lucky.agribackend.Dao.DiseaseInterface;
import com.lucky.agribackend.entity.Disease;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

public class DiseaseService {

    @Autowired
    private DiseaseInterface DiseaseRepo;

    public List<Disease> searchDiseases(String keyword) {
        return DiseaseRepo.findByName(keyword);
    }

    public Disease createDisease(Disease disease) {
        return DiseaseRepo.save(disease);
    }

    public Disease updateDisease(Disease disease) {
        Disease existingDisease = DiseaseRepo.findById(disease.getId()).orElse(null);
        if (existingDisease != null) {
            existingDisease.setName(disease.getName());
            existingDisease.setType(disease.getType());
        } else {
            return null;
        }
        return DiseaseRepo.save(existingDisease);
    }

    public void deleteDisease(int id) {
        DiseaseRepo.deleteById(id);
    }
}
