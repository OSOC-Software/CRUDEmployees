package com.crud.employees.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourcesNotFoundException extends RuntimeException {

    private final static long serialVersionID = 1L;

    public ResourcesNotFoundException(String message){
        super(message);
    }
}
