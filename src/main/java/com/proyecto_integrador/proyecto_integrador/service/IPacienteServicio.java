package com.proyecto_integrador.proyecto_integrador.service;

import com.proyecto_integrador.proyecto_integrador.entity.Paciente;

import java.util.List;

public interface IPacienteServicio {
    //CRUD - ABM
    Paciente guardar (Paciente paciente);
    Paciente buscarPorId(Long id);
    List<Paciente> listarTodos();
    void actualizar(Paciente paciente);
    void eliminar(Long id);
}
