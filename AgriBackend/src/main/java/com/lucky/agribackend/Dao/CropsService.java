package com.lucky.agribackend.Dao;

import java.util.Map;
import com.lucky.agribackend.entity.Crop;

public interface CropsService {

    public Map<Integer,Crop> getAllCrops();
    public Crop getCropById(int id);
    public Crop addCrop(Crop crop);
    public Crop updateCrop(Crop crop);
    public void deleteCrop(int id);
}

