package com.lucky.agribackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lucky.agribackend.Dao.CropDiseasePesticideInterface;
import com.lucky.agribackend.Dao.DiseaseInterface;
import com.lucky.agribackend.entity.Disease;

@Service
public class CropDiseasePesticiderService {

    @Autowired
    private CropDiseasePesticideInterface cdpi;

    @Autowired
    private DiseaseInterface disRepo;
    public List<Disease> findDiseaseIdsByCropId(int cropId) {
        List<Integer> dislist=cdpi.findUniqueDiseaseIdsByCropId(cropId);
        List<Disease> diseases=disRepo.findAllById(dislist);
        return diseases;
    }
}
