package com.proyecto_integrador.proyecto_integrador.repository;

import com.proyecto_integrador.proyecto_integrador.entity.Odontologo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOdontologoRepository extends JpaRepository<Odontologo, Long> {

//    @Query("SELECT o FROM Odontologo o WHERE o.matricula = ?1")
    Odontologo findByMatricula (String matricula);

}
