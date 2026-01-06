package com.resnickcollege.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.resnickcollege.model.Teacher;
import com.resnickcollege.repository.TeacherRepository;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

    @Autowired
    private TeacherRepository repo;

    @GetMapping
    public List<Teacher> getAllTeachers() {
        return repo.findAll();
    }

    @PostMapping
    public Teacher addTeacher(@RequestBody Teacher teacher) {
        return repo.save(teacher);
    }
}
