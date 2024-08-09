package com.lucky.agribackend.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {

    @GetMapping("/all")
    public String Hello(){
        return "hello mitro";
    }
}
