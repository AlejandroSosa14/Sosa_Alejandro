package com.proyecto_integrador.proyecto_integrador.repository;

import com.proyecto_integrador.proyecto_integrador.entity.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITurnoRepository extends JpaRepository<Turno, Long> {
}
