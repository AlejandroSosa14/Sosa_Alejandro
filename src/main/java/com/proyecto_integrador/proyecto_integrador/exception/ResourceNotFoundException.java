package com.proyecto_integrador.proyecto_integrador.exception;

//creamos nuestra propia excepción
public class ResourceNotFoundException extends RuntimeException {
    //creo un constructor
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
