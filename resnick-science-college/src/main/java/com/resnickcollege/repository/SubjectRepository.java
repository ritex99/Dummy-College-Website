package com.resnickcollege.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.resnickcollege.model.Subject;

public interface SubjectRepository 
        extends MongoRepository<Subject, String> {
}
