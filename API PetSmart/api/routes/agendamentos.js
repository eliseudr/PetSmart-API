/** @format */

const express = require("express");
const agendamentosController = require("../controllers/agendamentos");

const router = express.Router();

router.post("/", (req, res) => {
  agendamentosController.create(req, res);
});

router.get("/:id", (req, res) => {
  agendamentosController.getById(req, res);
});

router.get("/", (req, res) => {
  agendamentosController.getAll(req, res);
});

module.exports = router;
