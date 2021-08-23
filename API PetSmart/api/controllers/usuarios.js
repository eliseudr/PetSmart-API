/** @format */

const { Sequelize, DataTypes } = require("sequelize");
const Usuario = require("../models/usuario");
const helpers = require("../helpers/helpers");

module.exports = {
  async getById(req, res) {
    const sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      const usuario = await Usuario(sequelize, Sequelize.DataTypes).findOne({
        where: {
          id: req.params.id,
        },
      });
      res.send(usuario || {});
    } catch (error) {
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },
};
