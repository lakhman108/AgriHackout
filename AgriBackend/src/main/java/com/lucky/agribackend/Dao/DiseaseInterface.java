package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseInterface extends JpaRepository<Disease,Integer> {
}
