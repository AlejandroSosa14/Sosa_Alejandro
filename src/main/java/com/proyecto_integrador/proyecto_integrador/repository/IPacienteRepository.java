package com.proyecto_integrador.proyecto_integrador.repository;

import com.proyecto_integrador.proyecto_integrador.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPacienteRepository extends JpaRepository<Paciente, Long> {
}
