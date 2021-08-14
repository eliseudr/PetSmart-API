const { Sequelize, DataTypes } = require("sequelize");
const UserLogin = require("../models/user_login");
const helpers = require("../helpers/helpers");
const strings = require("../helpers/strings");

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      await UserLogin(
        sequelize,
        Sequelize.DataTypes,
      ).create({
        email: req.body.email,
        cpf: req.body.cpf,
        usuario: req.body.usuario,
        senha: req.body.senha,
        cliente: req.body.cliente,
        fornecedor: req.body.fornecedor,
      });
      res.status(200).send(strings.usuarioCriado);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    }
    sequelize.close();
  },
};
