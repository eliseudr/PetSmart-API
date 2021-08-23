/** @format */

const express = require("express");
const petsController = require("../controllers/usuarios");

const router = express.Router();

router.get("/:id", (req, res) => {
  petsController.getById(req, res);
});

module.exports = router;
