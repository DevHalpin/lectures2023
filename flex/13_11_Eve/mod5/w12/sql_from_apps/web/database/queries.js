const client = require("./db");

const getCustomers = () => {
    return client.query("SELECT * FROM customers ORDER BY id")
    .then((data) => {
        console.log(data.rows);
        return data.rows;
    })
};

const getCustomer = (id) => {
    return client.query(`SELECT * FROM customers WHERE id = $1`,[id])
    .then((data) => {
        console.log(data.rows[0]);
        return data.rows[0];
    })
};

const editCustomerById = (id, newFirstName) => {
    return client.query(`UPDATE customers SET first_name = $1 WHERE id = $2 RETURNING *`, [newFirstName, id])
    .then((data) => {
        console.log(data);
        return data.rows[0];
    })
}

const addCustomer = (firstName, lastName, email) => {
    return client.query(`INSERT INTO customers (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *`, [firstName, lastName, email])
    .then((data) => {
        console.log(data);
        return data.rows[0];
    })
}

const deleteCustomer = (id) => {
    return client.query(`DELETE FROM customers WHERE id = $1`, [id])
    .then(() => {
        console.log(`Customer with id ${id} has been deleted`);
        return `Customer with id ${id} has been deleted`;
    })
}

module.exports = { getCustomers, getCustomer, editCustomerById, addCustomer, deleteCustomer}