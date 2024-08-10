package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.Crop;
import com.lucky.agribackend.entity.Disease;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseInterface extends JpaRepository<Disease,Integer> {
        public List<Disease> findByName(String name);

}
