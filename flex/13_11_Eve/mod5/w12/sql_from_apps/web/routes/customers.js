const express = require("express");
const router = express.Router();

const { getCustomers, getCustomer, editCustomerById, addCustomer, deleteCustomer } = require("../database/queries");

router.get("/", (req, res) => {
    getCustomers().then((data) => {
        res.json(data);
    })
});

router.get("/:id", (req, res) => {
    getCustomer(req.params.id).then((data) => {
        res.json(data);
    })
});

router.post("/", (req, res) => {
    addCustomer(req.body.first_name, req.body.last_name, req.body.email).then((data) => {
        res.json(data);
    })
})

router.post("/:id/delete", (req, res) => {
    deleteCustomer(req.params.id).then((data) => {
        res.json(data);
    })
})

router.post("/:id", (req, res) => {
    editCustomerById(req.params.id, req.body.first_name).then((data) => {
        res.json(data);
    })
})



module.exports = router;