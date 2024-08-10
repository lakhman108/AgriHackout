package com.lucky.agribackend.Service;

import com.lucky.agribackend.Dao.PesticideInterface;
import com.lucky.agribackend.entity.Pesticide;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PesticideService {

    @Autowired
    private PesticideInterface pesticideRepo;

    public List<Pesticide> searchPesticides(String keyword) {
        return  pesticideRepo.findByNameIsContainingIgnoreCase(keyword);
    }

    public Pesticide createPesticide(Pesticide pesticide) {
       return pesticideRepo.save(pesticide);
    }

    public Pesticide updatePesticide(Pesticide pesticide) {
        return pesticideRepo.save(pesticide);
    }

    public void deletePesticide(int id) {
         pesticideRepo.deleteById(id);
    }
}
