package com.lucky.agribackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
@Entity
@Table(name = "CropDiseasePesticide")
public class CropDiseasePesticide {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "crop_id")
    private Crop crop;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "disease_id")
    private Disease disease;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "pesticide_id")
    private Pesticide pesticide;

    private String dosage;
}
