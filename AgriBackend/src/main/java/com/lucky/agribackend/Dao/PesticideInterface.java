package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.Pesticide;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PesticideInterface extends JpaRepository <Pesticide,Integer> {
}
