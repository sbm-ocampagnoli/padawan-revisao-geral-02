package br.com.backend.backend.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.backend.backend.model.Fruit;
import br.com.backend.backend.repository.FruitRepository;


@Service
public class FruitService {
	
	@Autowired
	private FruitRepository fruitRepository;

	public List<Fruit> listAll() throws SQLException{
		return this.fruitRepository.listAll();
	}
}
