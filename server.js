const express = require("express");
const productsRoutes = require("./routes/prodtucts")
const healthRoutes = require("./routes/health")

const server = express();
server.use(express.json());

server.use(productsRoutes.router);
server.use(healthRoutes.router);

module.exports = server