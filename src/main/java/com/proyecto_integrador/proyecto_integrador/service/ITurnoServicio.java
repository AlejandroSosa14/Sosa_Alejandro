package com.proyecto_integrador.proyecto_integrador.service;

import com.proyecto_integrador.proyecto_integrador.entity.Turno;

import java.util.List;

public interface ITurnoServicio {
    //CRUD
    Turno guardar(Turno turno);
    Turno buscarPorId(Long id);
    List<Turno> listarTodos();
}
