/** @format */

const { Sequelize, DataTypes } = require("sequelize");
const helpers = require("../helpers/helpers");
const strings = require("../helpers/strings");

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    try {
    } catch (error) {
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },
};
