package com.lucky.agribackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Pests")
public class Pest {

    @Id
    private int id;
    private String name;
    private String type; // e.g., Insect, Fungus, Virus
    private String damageDescription; // Description of the damage caused
    private String affectedStage; // Stage of crop when the pest attacks (e.g., Seedling, Maturity)
    private String controlMeasures; // Methods to control the pest
    


    

}
