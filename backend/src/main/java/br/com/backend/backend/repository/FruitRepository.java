package br.com.backend.backend.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.backend.backend.model.Fruit;

@Repository
public class FruitRepository {

	private Connection connection;

	@Autowired
	public FruitRepository(DataSource dataSource) throws SQLException {
		this.connection = dataSource.getConnection();
	}

	public List<Fruit> listAll() throws SQLException {
		List<Fruit> fruits = new ArrayList<>();

		String sql = "SELECT id, name, season, price_per_kg FROM fruit";

		try (PreparedStatement pstm = connection.prepareStatement(sql)) {
			pstm.execute();

			try (ResultSet rst = pstm.getResultSet()) {
				while (rst.next()) {
					Fruit fruit = new Fruit();
					fruit.setId(rst.getLong("id"));
					fruit.setName(rst.getString("name"));
					fruit.setSeason(rst.getString("season"));
					fruit.setPricePerKg(rst.getDouble("price_per_kg"));

					fruits.add(fruit);
				}
			}
		}
		return fruits;
	}

	public void save(Fruit fruit) throws SQLException {
		String sql = "INSERT INTO fruit (name, season, price_per_kg) VALUES (?, ?, ?)";

		try (PreparedStatement pstm = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
			pstm.setString(1, fruit.getName());
			pstm.setString(2, fruit.getSeason());
			pstm.setDouble(3, fruit.getPricePerKg());

			pstm.execute();

			try (ResultSet rst = pstm.getGeneratedKeys()) {
				if (rst.next()) {
					fruit.setId(rst.getLong(1));
				}
			}
		}
	}

}
