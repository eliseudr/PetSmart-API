const { Sequelize, DataTypes } = require("sequelize");
const Usuario = require("../models/usuario");
const helpers = require("../helpers/helpers");
const strings = require("../helpers/strings");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function codificarSenha_(req, res,){
  const senhaCodificada = await bcrypt.hash(req.body.senha, saltRounds);
  return senhaCodificada;
}

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      await Usuario(
        sequelize,
        Sequelize.DataTypes,
      ).create({
        email: req.body.email,
        nome: req.body.nome,
        cpf: req.body.cpf,
        // Codigicar senha em base64
        senha: await codificarSenha_(req, res),
        // senha: req.body.senha,
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
