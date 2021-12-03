/** @format */

const jwt = require("jsonwebtoken");
const strings = require("../helpers/strings");
const constants = require("../helpers/constants");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, constants.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      error: strings.errorTokenInvalido,
    });
  }
};
