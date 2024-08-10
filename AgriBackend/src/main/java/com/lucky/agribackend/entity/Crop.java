package com.lucky.agribackend.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Crops")
public class Crop {

   @Id
    private int id;
    private String name;
    private String type;
    private String description;
    private String image;
    private String season;
    private String soil;


}
