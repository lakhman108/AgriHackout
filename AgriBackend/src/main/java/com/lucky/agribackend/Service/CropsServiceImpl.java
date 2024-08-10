package com.lucky.agribackend.Service;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.lucky.agribackend.entity.Crop;


@Service
public class CropsServiceImpl implements CropsService {
    
    private Map<Integer, Crop> cropsMap =  new HashMap<>();
    private int Cropid = 0;

    @Override
    public Map<Integer,Crop> getAllCrops() {
        return cropsMap;
    }

    @Override
    public Crop getCropById(int id) {
        return cropsMap.get(id);
    }

    @Override
    public Crop addCrop(Crop crop) {
        crop.setId(Cropid);
        cropsMap.put(Cropid, crop);
        Cropid++;
        return crop;
    }

    @Override
    public Crop updateCrop(Crop crop) {
        Crop ExistingCrop = cropsMap.get(crop.getId());
        if (crop.getName() != null) {
            ExistingCrop.setName(crop.getName());
            
        }
        if (crop.getType() != null) {
            ExistingCrop.setType(crop.getType());
        }
        if (crop.getDescription() != null) {
            ExistingCrop.setDescription(crop.getDescription());
        }  
        if (crop.getImage() != null) {
            ExistingCrop.setImage(crop.getImage());
        }
        if (crop.getSeason() != null) {
            ExistingCrop.setSeason(crop.getSeason());
        }
        if (crop.getSoil() != null) {
            ExistingCrop.setSoil(crop.getSoil());
        }
        return ExistingCrop;
    }

    @Override
    public void deleteCrop(int id) {
        cropsMap.remove(id);
    }

    public Map<Integer, Crop> getCropsMap() {
        return cropsMap;
    }

    public void setCropsMap(Map<Integer, Crop> cropsMap) {
        this.cropsMap = cropsMap;
    }

    public int getCropid() {
        return Cropid;
    }

    public void setCropid(int cropid) {
        Cropid = cropid;
    }

    


}
