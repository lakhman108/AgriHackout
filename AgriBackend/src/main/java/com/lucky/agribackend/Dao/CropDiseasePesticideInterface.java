package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.CropDiseasePesticide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CropDiseasePesticideInterface extends JpaRepository<CropDiseasePesticide,Integer> {
}
