/** @format */

const express = require("express");
const petsController = require("../controllers/pets");

const router = express.Router();

router.get("/", (req, res) => {
  petsController.getAll(req, res);
});

router.post("/", (req, res) => {
  petsController.create(req, res);
});

router.get("/:id", (req, res) => {
  petsController.getById(req, res);
});

router.put("/:id", (req, res) => {
  petsController.update(req, res);
});

router.delete("/:id", (req, res) => {
  petsController.delete(req, res);
});

module.exports = router;
