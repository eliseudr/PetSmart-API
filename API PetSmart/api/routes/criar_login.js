const express = require("express"); 
const userLoginController = require("../controllers/criar_user_login");

const router = express.Router();

router.post("/", (req, res) => {
  userLoginController.create(req, res);
});

module.exports = router;
