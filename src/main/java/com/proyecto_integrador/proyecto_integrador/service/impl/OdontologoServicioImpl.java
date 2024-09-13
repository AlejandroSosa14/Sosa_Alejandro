package com.proyecto_integrador.proyecto_integrador.service.impl;

import com.proyecto_integrador.proyecto_integrador.entity.Odontologo;
import com.proyecto_integrador.proyecto_integrador.exception.ResourceNotFoundException;
import com.proyecto_integrador.proyecto_integrador.repository.IOdontologoRepository;
import com.proyecto_integrador.proyecto_integrador.service.IOdontologoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OdontologoServicioImpl implements IOdontologoServicio {

    @Autowired
    private IOdontologoRepository iOdontologoRepository;


    @Override
    public Odontologo guardar(Odontologo odontologo) {
        return iOdontologoRepository.save(odontologo);
    }

    @Override
    public Odontologo buscarPorId(Long id) throws ResourceNotFoundException {
        //va a buscar al odontologo y lo va a guardar en odontologoBuscado
        //o va a guardar un null en el odontologoBuscado
        Optional<Odontologo> odontologoBuscado = iOdontologoRepository.findById(id);
        if (odontologoBuscado.isPresent()) {
            return odontologoBuscado.get();
        } else {

            //acá vamos a lanzar la excepción
            //return null;

            throw new ResourceNotFoundException("No se encontró el odontólogo con id " + id);
        }
    }


    @Override
    public void eliminar(Long id) {
        iOdontologoRepository.deleteById(id);
    }

    @Override
    public void actualizar(Odontologo odontologo) {
        iOdontologoRepository.save(odontologo);
    }

    @Override
    public List<Odontologo> listarTodos() {
        return iOdontologoRepository.findAll();
    }

    @Override
    public Odontologo buscarPorMatricula(String matricula) {
        return iOdontologoRepository.findByMatricula(matricula);
    }

}
