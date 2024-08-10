package com.lucky.agribackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "Diseases")
public class Disease {
    @Id
    private int id;
    private String name;
    private String type;

    @OneToMany(mappedBy = "disease")
    private List<CropDiseasePesticide> cropDiseasePesticides;
}