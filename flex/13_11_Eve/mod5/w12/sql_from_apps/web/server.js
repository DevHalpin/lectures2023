require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const customerRoutes = require("./routes/customers");
const { getCustomers } = require("../web/database/queries");


const app = express();

app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use("/customers", customerRoutes);

app.get("/", (req, res) => {
    getCustomers().then((data) => {
        res.render("index", { customers: data });
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});