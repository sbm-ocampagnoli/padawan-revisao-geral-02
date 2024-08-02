package br.com.backend.backend.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
