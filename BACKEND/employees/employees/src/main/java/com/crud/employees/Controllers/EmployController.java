package com.crud.employees.Controllers;

import com.crud.employees.Exceptions.ResourcesNotFoundException;
import com.crud.employees.Models.Employ;
import com.crud.employees.Repository.EmployRepository;
import org.apache.tomcat.util.json.JSONParser;
import org.aspectj.apache.bcel.generic.ObjectType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class EmployController {

    @Autowired
    private EmployRepository employRepository;

    @GetMapping("/employees")
    public List<Employ> listAllEmployees(){
        return employRepository.findAll();
    }

    @PostMapping("employee")
    public Employ saveEmploy(@RequestBody Employ emp){
        return employRepository.save(emp);
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<Employ> getEmployById(@PathVariable long id ){
        Employ emp = employRepository.findById(id).orElseThrow(()-> new ResourcesNotFoundException("No Existe el empleado con el id" + id));
        return ResponseEntity.ok(emp);
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<Employ> updateEmploy(@PathVariable long id, @RequestBody Employ empUpdate){
        Employ emp = employRepository.findById(id).orElseThrow(()-> new ResourcesNotFoundException("No Existe el empleado con el id" + id));
        emp.setName(empUpdate.getName());
        emp.setLastname(empUpdate.getLastname());
        emp.setEmail(empUpdate.getEmail());
        Employ empNewUpdate = employRepository.save(emp);
        return ResponseEntity.ok(empNewUpdate);
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<Object> deleteEmploy(@PathVariable long id){
        try {
            employRepository.deleteById(id);
            return ResponseEntity.ok(true);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

}
