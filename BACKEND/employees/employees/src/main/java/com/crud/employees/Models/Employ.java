package com.crud.employees.Models;

import jakarta.persistence.*;

@Entity
@Table(name="employees")
public class Employ {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="name", length = 60, nullable = false)
    private String name;
    @Column(name="lastname", length = 60, nullable = false)
    private String lastname;
    @Column(name="email", length = 60, nullable = false, unique = true)
    private String email;

    public Employ(){}

    public Employ( String name, String lastname, String email) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }

    public Employ(long id, String name, String lastname, String email) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
