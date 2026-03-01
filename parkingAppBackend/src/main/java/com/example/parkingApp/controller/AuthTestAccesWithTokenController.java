package com.example.parkingApp.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class AuthTestAccesWithTokenController {




@GetMapping("/test")
public String testEndpoint() {
    return "Ak toto vidíš, token funguje!";
}

}

