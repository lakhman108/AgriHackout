package com.lucky.agribackend.entity;

public class Crop {
    public static int getCropid;
    private int id;
    private String name;
    private String type;
    private String description;
    private String image;
    private String season;
    private String soil;

    public Crop() {
    }
    public Crop(int id, String name, String type, String description, String image, String season, String soil) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.image = image;
        this.season = season;
        this.soil = soil;
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
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getSeason() {
        return season;
    }
    public void setSeason(String season) {
        this.season = season;
    }
    public String getSoil() {
        return soil;
    }
    public void setSoil(String soil) {
        this.soil = soil;
    }
    @Override
    public String toString() {
        return "Crop [description=" + description + ", id=" + id + ", image=" + image + ", name=" + name + ", season="
                + season + ", soil=" + soil + ", type=" + type + "]";
    }
    

}
