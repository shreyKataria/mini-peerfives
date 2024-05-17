const bodyParser = require("body-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const connectDB = require("./config/db");
require("dotenv").config();
const userRouter = require("./routes/userRoute");
const rewardsRouter = require("./routes/rewardsRoute");

// initialize app
const app = express();

// database
connectDB();

// port
const port = process.env.PORT || 8000;

// middlewares
app.use(bodyParser.json());

// routes
app.use("/api", userRouter);
app.use("/api", rewardsRouter);

// server
app.listen(port, () => console.log(`server started at port : ${port}`));
