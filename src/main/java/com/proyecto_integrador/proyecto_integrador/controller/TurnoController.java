package com.proyecto_integrador.proyecto_integrador.controller;

import com.proyecto_integrador.proyecto_integrador.entity.Paciente;
import com.proyecto_integrador.proyecto_integrador.entity.Turno;
import com.proyecto_integrador.proyecto_integrador.service.IOdontologoServicio;
import com.proyecto_integrador.proyecto_integrador.service.IPacienteServicio;
import com.proyecto_integrador.proyecto_integrador.service.ITurnoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/turnos")
public class TurnoController {

    @Autowired
    private ITurnoServicio iTurnoServicio;

    @Autowired
    private IPacienteServicio iPacienteServicio;

    @Autowired
    private IOdontologoServicio iOdontologoServicio;

    @PostMapping
    public ResponseEntity<Turno> guardar(@RequestBody Turno turno) {
        return ResponseEntity.ok(iTurnoServicio.guardar(turno));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Turno> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(iTurnoServicio.buscarPorId(id));
    }

    @GetMapping
    public ResponseEntity<List<Turno>> listarTodos() {
        return ResponseEntity.ok(iTurnoServicio.listarTodos());
    }
}
