/** @format */

const { Sequelize, DataTypes } = require("sequelize");
const Usuario = require("../models/usuario");
const helpers = require("../helpers/helpers");
const strings = require("../helpers/strings");
const { cpf } = require("cpf-cnpj-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function codificarSenha_(req, res) {
  const senhaCodificada = await bcrypt.hash(req.body.senha, saltRounds);
  return senhaCodificada;
}

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    var cpfValido = false;
    try {
      const usuarioRepetido = await Usuario(
        sequelize,
        Sequelize.DataTypes
      ).findOne({
        where: {
          cpf: req.body.cpf,
        },
      });

      // Valida Cpf
      cpfValido = cpf.isValid(req.body.cpf);
      console.log("CPF é valido ? " + cpfValido);

      if (cpfValido === false) {
        res.status(401).send({ error: strings.errorCpfInvalido });
      } else {
        if (usuarioRepetido === null) {
          await Usuario(sequelize, Sequelize.DataTypes).create({
            email: req.body.email,
            nome: req.body.nome,
            cpf: req.body.cpf,
            senha: await codificarSenha_(req, res),
            cliente: req.body.cliente,
            fornecedor: req.body.fornecedor,
          });
          res.status(200).send({ usuarioCriado: strings.usuarioCriado });
        } else {
          res.status(401).send({ error: strings.errorUsuarioJaExiste });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },
};
