/** @format */

const express = require("express");
const petsController = require("../controllers/pets");

const router = express.Router();

router.post("/", (req, res) => {
  petsController.create(req, res);
});

module.exports = router;
