require("dotenv").config();
const { Client } = require("pg");

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_BASE,
    port: process.env.PORT,
}

const args = process.argv.slice(2);
const verb = args[0];
const id = args[1];
const client = new Client(config);

client.connect().then(() => console.log(`Connected to database on port ${config.port}`));

switch (verb) {
    case "browse":
        client.query("SELECT * FROM customers ORDER BY id").then((data) => {
            console.log(data.rows);
            client.end();
        })
        break;
    case "read":
        client.query(`SELECT * FROM customers WHERE id = $1`,[id]).then((data) => {
            console.log(data.rows[0]);
            client.end();
        })
        break;
    case "edit":
        const newFirstName = args[2];
        client.query(`UPDATE customers SET first_name = $1 WHERE id = $2 RETURNING *`,[newFirstName, id]).then((data) => {
            console.log(data.rows);
            client.end();
        })
        break;
    case "add":
        const newerFirstName = args[1];
        const newerLastName = args[2];
        const newerEmail = args[3];
        client.query(`INSERT INTO customers (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *`,[newerFirstName, newerLastName, newerEmail]).then((data) => {
            console.log(data.rows);
            client.end();
        })
        break;
    case "delete":
        client.query(`DELETE FROM customers WHERE id = $1 RETURNING *`,[id]).then(() => {
            console.log(`Customer with id ${id} has been deleted`);
            client.end();
        })
        break;
    default: 
        console.log("Please use a valid verb");
        client.end();
}