package com.example.demo.controller;

import com.example.demo.model.PatientRecord;
import com.example.demo.repository.PatientRecordRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins="*")
public class PatientRecordController {

    @Autowired
    PatientRecordRepository patientRecordRepository;
//    List<Student> students = new ArrayList<>(
//            Arrays.asList(
//                    new Student(1, "Tom", "US"),
//                    new Student(2, "Harry", "Canada"),
//                    new Student(3, "Nick", "UK")
//            )
//    );

    // Mappings - URL endpoints
    // Get the list of all student
    @GetMapping("/listPatient")
    public List<PatientRecord> getAllPatient() {
        return patientRecordRepository.findAll();
    }

    @GetMapping("/patient/{id}")
    public PatientRecord getPatient(@PathVariable Integer id) {
        return patientRecordRepository.findById(id).get();
    }

    @PostMapping("/patient")
    public List<PatientRecord> addPatient(@RequestBody PatientRecord patientRecord) {
        patientRecordRepository.save(patientRecord);
        return patientRecordRepository.findAll();
    }

    @PutMapping("/patient/{id}")
    public List<PatientRecord> updatePatient(@RequestBody PatientRecord student, @PathVariable Integer id) {
        PatientRecord studentObj = patientRecordRepository.findById(id).get();
        studentObj.setName(student.getName());
        studentObj.setAddress(student.getAddress());
        patientRecordRepository.save(studentObj);
        return patientRecordRepository.findAll();
    }

    @DeleteMapping("/patient/{id}")
    public List<PatientRecord> deleteStudent(@PathVariable Integer id) {
        patientRecordRepository.delete(patientRecordRepository.findById(id).get());
        return patientRecordRepository.findAll();
    }
}