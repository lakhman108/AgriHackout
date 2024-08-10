package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.Crop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CropsInterface extends JpaRepository<Crop,Integer> {

    public List<Crop> findByNameIsContainingIgnoreCase(String name);
}
