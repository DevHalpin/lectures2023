const pg = require("pg");

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
}

const client = new pg.Client(config);

client.connect().then(() => console.log(`Connected to database on port ${config.port}`));

module.exports = client;