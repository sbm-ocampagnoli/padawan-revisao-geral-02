package br.com.backend.backend.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.backend.backend.controller.form.FruitForm;
import br.com.backend.backend.model.Fruit;
import br.com.backend.backend.service.FruitService;

@RestController
@RequestMapping("/fruits")
public class FruitController {

	@Autowired
	private FruitService fruitService;

	@GetMapping
	public List<Fruit> listAll() throws SQLException {
		return this.fruitService.listAll();
	}

	@PostMapping
	public ResponseEntity<Fruit> createFruit(@RequestBody Fruit fruit) throws SQLException {
		fruitService.saveFruit(fruit);
		return new ResponseEntity<>(fruit, HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	@Transactional
	public void updateFruit(@PathVariable Long id, @RequestBody FruitForm form) throws SQLException {
		this.fruitService.updateFruit(id, form);
	}
}
