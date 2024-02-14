DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
);

INSERT INTO customers (first_name, last_name, email)
VALUES
    ('John', 'Doe', 'johndoe@gmail.com'),
    ('Jane', 'Doe', 'janedoe@gmail.com'),
    ('John', 'Smith', 'johnsmith@gmail.com');
