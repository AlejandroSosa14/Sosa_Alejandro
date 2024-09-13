package com.proyecto_integrador.proyecto_integrador.service;

import com.proyecto_integrador.proyecto_integrador.entity.Odontologo;
import com.proyecto_integrador.proyecto_integrador.exception.ResourceNotFoundException;

import java.util.List;

public interface IOdontologoServicio {
    Odontologo guardar (Odontologo odontologo);
    Odontologo buscarPorId(Long id) throws ResourceNotFoundException;
    void eliminar(Long id);
    void actualizar (Odontologo odontologo);

    List<Odontologo> listarTodos();

    Odontologo buscarPorMatricula(String matricula);
}
