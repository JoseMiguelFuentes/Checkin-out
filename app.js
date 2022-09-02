const { Sequelize } = require("sequelize");
const express = require("express");
const { Registration } = require("./models/registrationModel");
//Route
const { registrationRouter } = require("./routes/registrationRoute");
const app = express();
app.use(express.json());
app.use("/api/v1/registrations", registrationRouter);

app.all("*", (request, response) => {
  const { method, url } = request;
  response.status(404).json({
    status: "error",
    message: `${method} ${url} does not exist in our server`,
  });
});

module.exports = { app };
