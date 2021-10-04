package br.org.generation.projetointegrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.projetointegrador.model.Tema;
import br.org.generation.projetointegrador.repository.TemaRepository;

@RestController
@RequestMapping("/tema")
@CrossOrigin(origins="*", allowedHeaders = "*") 
public class TemaController {
	@Autowired
	TemaRepository temaRepository;

	@GetMapping
	public ResponseEntity<List<Tema>> getAll(){
		return ResponseEntity.ok(temaRepository.findAll());
	}
}
