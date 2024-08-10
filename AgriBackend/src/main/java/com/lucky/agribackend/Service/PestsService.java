package com.lucky.agribackend.Service;

import java.util.Map;

import com.lucky.agribackend.entity.Pest;

public interface PestsService {


    public Map<Integer,Pest> getAllPests();
    public Pest getPestById(int id);
    public Pest addPest(Pest pest);
    public Pest updatePest(Pest pest);
    public void deletePest(int id);

} 
