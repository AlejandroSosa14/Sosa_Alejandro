package com.proyecto_integrador.proyecto_integrador.controller;

import com.proyecto_integrador.proyecto_integrador.entity.Odontologo;
import com.proyecto_integrador.proyecto_integrador.entity.Paciente;
import com.proyecto_integrador.proyecto_integrador.service.IPacienteServicio;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    @Autowired
    private IPacienteServicio iPacienteServicio;



    @GetMapping("/{id}")
    public ResponseEntity<Paciente> consultarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(iPacienteServicio.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Paciente> guardar(@RequestBody Paciente paciente) {
        return ResponseEntity.ok(iPacienteServicio.guardar(paciente));
    }

    @GetMapping
    public ResponseEntity<List<Paciente>> listarTodos() {
        return ResponseEntity.ok(iPacienteServicio.listarTodos());
    }

    @PostMapping("/actualizaPaciente")
    public void actualizar(@RequestBody Paciente paciente, HttpServletResponse response) throws IOException {
        iPacienteServicio.actualizar(paciente);
        response.sendRedirect("/pacienteList.html");
    }

    @GetMapping("/eliminarPaciente")
    public void eliminar(@RequestParam("id") Long id, HttpServletResponse response) throws IOException {
        iPacienteServicio.eliminar(id);
        response.sendRedirect("/pacienteList.html");
    }


}
