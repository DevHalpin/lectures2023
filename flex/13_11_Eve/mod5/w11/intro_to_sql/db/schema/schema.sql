DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS albums;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  country VARCHAR(255) NOT NULL,
  payment_due_date DATE NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  album_name VARCHAR(255) NOT NULL,
  artist_name VARCHAR(255) NOT NULL,
  release_date DATE NOT NULL
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  track_number INT NOT NULL,
  rating INT NOT NULL,
  album_id INT REFERENCES albums(id) ON DELETE CASCADE
);