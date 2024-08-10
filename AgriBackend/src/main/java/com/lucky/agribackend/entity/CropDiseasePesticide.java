package com.lucky.agribackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "CropDiseasePesticide")
public class CropDiseasePesticide {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "crop_id")
    private Crop crop;

    @ManyToOne
    @JoinColumn(name = "disease_id")
    private Disease disease;

    @ManyToOne
    @JoinColumn(name = "pesticide_id")
    private Pesticide pesticide;

    private String dosage;
}