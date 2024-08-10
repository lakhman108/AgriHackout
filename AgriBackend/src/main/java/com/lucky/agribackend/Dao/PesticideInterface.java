package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.Pesticide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PesticideInterface extends JpaRepository <Pesticide,Integer> {
    List<Pesticide> findByNameIsContainingIgnoreCase(String keyword);
}
