package com.lucky.agribackend.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.lucky.agribackend.entity.Pest;

@Service
public class PestsServiceImpl implements PestsService {

    private Map<Integer, Pest> pests = new HashMap<>();
    private int id = 1;

    @Override
    public Map<Integer, Pest> getAllPests() {
        return pests;
    }

    @Override
    public Pest getPestById(int id) {
        return pests.get(id);
    }

    @Override
    public Pest addPest(Pest pest) {
        pest.setId(id);
        pests.put(id, pest);
        id++;
        return pest;
    }

    @Override
    public Pest updatePest(Pest pest) {
        Pest existingPest = pests.get(pest.getId());
        if (pest.getName() != null) {
            existingPest.setName(pest.getName());
        }
        if (pest.getType() != null) {
            existingPest.setType(pest.getType());
        }
        if (pest.getDamageDescription() != null) {
            existingPest.setDamageDescription(pest.getDamageDescription());
        }
        if (pest.getAffectedStage() != null) {
            existingPest.setAffectedStage(pest.getAffectedStage());
        }
        if (pest.getControlMeasures() != null) {
            existingPest.setControlMeasures(pest.getControlMeasures());
        }
        return existingPest;
    }

    @Override
    public void deletePest(int id) {
        pests.remove(id);
    }
    

    
}
