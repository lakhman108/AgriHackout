package com.lucky.agribackend.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.util.List;

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
    private String description;
    private String image;

    @ManyToMany
    List<Pest> crop_pesticides;


}
