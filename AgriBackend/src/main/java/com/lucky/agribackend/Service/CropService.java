package com.lucky.agribackend.Service;

import com.lucky.agribackend.Dao.CropsInterface;
import com.lucky.agribackend.entity.Crop;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CropService {


    private CropsInterface cropRepo;
    public List<Crop> searchCrops(String keyword) {
        return cropRepo.findByName(keyword);
    }

    public Crop updateCrop(Crop crop) {
    }

    public void deleteCrop(int id) {
    }
}
