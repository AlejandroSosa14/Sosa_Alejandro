package com.proyecto_integrador.proyecto_integrador.controller;

import com.proyecto_integrador.proyecto_integrador.entity.Odontologo;
import com.proyecto_integrador.proyecto_integrador.service.IOdontologoServicio;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/odontologos")
public class OdontologoController {

    @Autowired
    private IOdontologoServicio odontologoServicio;


    //RequestParam url ? parametro = X & parametro = X
    //PathVariable url/pathVariable
    @GetMapping("/{id}")
    public ResponseEntity<Odontologo> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(odontologoServicio.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Odontologo> guardar(@RequestBody Odontologo odontologo) {
        return ResponseEntity.ok(odontologoServicio.guardar(odontologo));
    }

    //listar todos
    @GetMapping
    public ResponseEntity<List<Odontologo>> listarTodos() {
        return ResponseEntity.ok(odontologoServicio.listarTodos());
    }

    @PostMapping("/actualizaOdontologo")
    public void actualizar(@RequestBody Odontologo odontologo, HttpServletResponse response) throws IOException {
        odontologoServicio.actualizar(odontologo);
        response.sendRedirect("/odontologoList.html");
    }

    @GetMapping("/eliminarOdontologo")
    public void eliminar(@RequestParam("id") Long id, HttpServletResponse response) throws IOException {
        odontologoServicio.eliminar(id);
        response.sendRedirect("/odontologoList.html");
    }

    @GetMapping("matricula/{matricula}")
    public ResponseEntity<Odontologo> buscarPorMatricula(@PathVariable String matricula) {
        return ResponseEntity.ok(odontologoServicio.buscarPorMatricula(matricula));
    }

}
