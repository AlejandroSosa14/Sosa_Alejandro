package com.proyecto_integrador.proyecto_integrador.service.impl;

import com.proyecto_integrador.proyecto_integrador.entity.Turno;
import com.proyecto_integrador.proyecto_integrador.repository.ITurnoRepository;
import com.proyecto_integrador.proyecto_integrador.service.ITurnoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurnoServicioImpl implements ITurnoServicio {

    @Autowired
    private ITurnoRepository iTurnoRepository;


    @Override
    public Turno guardar(Turno turno) {
        //lógica
        return iTurnoRepository.save(turno);
    }

    @Override
    public Turno buscarPorId(Long id) {
        Optional<Turno> turnoBuscado =  iTurnoRepository.findById(id);
        return turnoBuscado.orElse(null);
    }

    @Override
    public List<Turno> listarTodos() {
        return iTurnoRepository.findAll();
    }
}
