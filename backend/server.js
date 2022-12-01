const express = require("express");
const dotenv = require("dotenv").config();
const colors = require('colors');
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRouter"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
