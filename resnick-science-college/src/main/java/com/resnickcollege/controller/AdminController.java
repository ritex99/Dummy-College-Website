package com.resnickcollege.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resnickcollege.dto.AdminLoginRequest;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @PostMapping("/login")
    public String login(@RequestBody AdminLoginRequest request) {

        if ("admin".equals(request.getUsername())
                && "admin123".equals(request.getPassword())) {
            return "success";
        }

        return "failure";
    }
}
