package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PatientRecord {
    @Id
    Integer patientId;
    String name;
    int age;
    String address;

    public PatientRecord(Integer patientId, String name, int age, String address) {
        this.patientId = patientId;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public PatientRecord() {

    }

    public Integer getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
