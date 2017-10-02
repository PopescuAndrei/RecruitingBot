package com.github.popescuandrei.recruitingBot.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
  
    @GetMapping("/me")
    public Principal getMyUser(Principal principal) {
        return principal;
    }
}