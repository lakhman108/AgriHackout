package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.Crop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CropsInterface extends JpaRepository<Crop,Integer> {
}
