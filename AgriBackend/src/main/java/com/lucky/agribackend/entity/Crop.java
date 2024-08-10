package com.lucky.agribackend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
@Entity
@Table(name = "Crops")
public class Crop {
 @Id
 private int id;
 private String name;
 private String description;
 private String image;


 @OneToMany(mappedBy = "crop")
 @JsonIgnore
 private List<CropDiseasePesticide> cropDiseasePesticides;
}
