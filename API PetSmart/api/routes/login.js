const express = require("express"); 
const usuarioLoginController = require("../controllers/user_login");

const router = express.Router();

router.post("/", (req, res) => {
  usuarioLoginController.login(req, res);
});

module.exports = router;
