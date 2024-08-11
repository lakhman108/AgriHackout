package com.lucky.agribackend.Service;

import com.lucky.agribackend.Dao.CropsInterface;
import com.lucky.agribackend.entity.Crop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CropService {

    @Autowired
    private CropsInterface cropRepo;

    public List<Crop> searchCrops(String keyword) {
        return cropRepo.findByNameIsContainingIgnoreCase(keyword);
    }

    public Crop updateCrop(Crop crop) {
        Crop existingCrop = cropRepo.findById(crop.getId()).orElse(null);
        if (existingCrop != null) {
            existingCrop.setName(crop.getName());
            existingCrop.setDescription(crop.getDescription());
            existingCrop.setImage(crop.getImage());
        }
        else {
            return null;
        }
        return cropRepo.save(existingCrop);
    }

    public void deleteCrop(int id) {
        cropRepo.deleteById(id);
    }
    
    public Crop createCrop(Crop crop) {
        return cropRepo.save(crop);
    }

    public List<Crop> searchallCrops() {
        return cropRepo.findAll();
    }
}
