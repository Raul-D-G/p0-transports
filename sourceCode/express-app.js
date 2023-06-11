const express = require("express");
const cors = require("cors");

const transportRouter = require("./api/transport.router");

module.exports = async (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  //router
  app.use("/api/transports", transportRouter);
};
