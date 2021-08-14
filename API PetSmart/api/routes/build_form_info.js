const express = require("express"); 
const buildFormInfoController = require("../controllers/build_form_info");

const router = express.Router();

router.post("/", (req, res) => {
  buildFormInfoController.create(req, res);
});

module.exports = router;
