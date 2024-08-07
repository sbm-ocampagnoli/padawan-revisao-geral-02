CREATE TABLE IF NOT EXISTS fruit (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    season VARCHAR(255) NOT NULL,
    price_per_kg DOUBLE NOT NULL
);


INSERT INTO fruit (name, season, price_per_kg) VALUES
('Maçã', 'Outono', 6.50),
('Banana', 'O ano inteiro', 4.00),
('Laranja', 'Inverno', 5.00),
('Manga', 'Verão', 7.20),
('Pêra', 'Outono', 6.00),
('Uva', 'Verão', 8.00),
('Melancia', 'Verão', 3.50),
('Abacaxi', 'Verão', 9.00),
('Morango', 'Primavera', 12.00),
('Kiwi', 'Outono', 10.00);
