const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;

app.use("/", (req, res, next) => {
  res.send("peer-five");
});

app.listen(port, () => console.log(`server started at port : ${port}`));
