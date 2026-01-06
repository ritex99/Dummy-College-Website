package com.resnickcollege.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.resnickcollege.model.Teacher;

public interface TeacherRepository 
        extends MongoRepository<Teacher, String> {
}
