package com.lucky.agribackend.entity;


public class Pest {
    private int id;
    private String name;
    private String type; // e.g., Insect, Fungus, Virus
    private String damageDescription; // Description of the damage caused
    private String affectedStage; // Stage of crop when the pest attacks (e.g., Seedling, Maturity)
    private String controlMeasures; // Methods to control the pest
    

    public Pest() {
    }

    public Pest(int id, String name, String type, String damageDescription, String affectedStage, String controlMeasures) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.damageDescription = damageDescription;
        this.affectedStage = affectedStage;
        this.controlMeasures = controlMeasures;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDamageDescription() {
        return damageDescription;
    }

    public void setDamageDescription(String damageDescription) {
        this.damageDescription = damageDescription;
    }

    public String getAffectedStage() {
        return affectedStage;
    }

    public void setAffectedStage(String affectedStage) {
        this.affectedStage = affectedStage;
    }

    public String getControlMeasures() {
        return controlMeasures;
    }

    public void setControlMeasures(String controlMeasures) {
        this.controlMeasures = controlMeasures;
    }

    @Override
    public String toString() {
        return "Pesticide [affectedStage=" + affectedStage + ", controlMeasures=" + controlMeasures + ", damageDescription="
                + damageDescription + ", id=" + id + ", name=" + name + ", type=" + type + "]";
    }
    

}
