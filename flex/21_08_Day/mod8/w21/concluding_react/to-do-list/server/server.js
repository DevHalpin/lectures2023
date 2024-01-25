const PORT = 8080;
const app = require('express')();
const cors = require('cors');

const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
const todoRoutes = require('./routes/todo');



app.use("/api/todos" , todoRoutes);


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));