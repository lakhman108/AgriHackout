package com.lucky.agribackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "Pesticides")
public class Pesticide {
    @Id
    private int id;
    private String name;
    private String imageurl;
    private int price;

    @OneToMany(mappedBy = "pesticide")
    private List<CropDiseasePesticide> cropDiseasePesticides;
}
