CREATE DATABASE IF NOT EXISTS vim;

USE vim;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    city VARCHAR(255) NOT NULL,
    total_distance_run INT DEFAULT 0,
    publicKey TEXT NOT NULL
);

INSERT INTO vim.users
    (name, age, city, total_distance_run, publicKey)
VALUES
    ('Anya Suraski', 41, 'Givaataim', 400, '-');

