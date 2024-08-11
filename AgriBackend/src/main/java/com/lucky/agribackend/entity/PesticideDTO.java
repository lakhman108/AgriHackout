package com.lucky.agribackend.entity;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PesticideDTO {
    private String name;
    private String dosage;
}