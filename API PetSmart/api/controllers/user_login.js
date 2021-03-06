/** @format */

const { Sequelize, DataTypes } = require("sequelize");
const Usuario = require("../models/usuario");
const helpers = require("../helpers/helpers");
const strings = require("../helpers/strings");
const constants = require("../helpers/constants");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function verificarSenha_(req, res, usuarioLogin) {
  bcrypt.compare(req.body.senha, usuarioLogin.senha, function (err, result) {
    if (result) {
      const token = jwt.sign(
        {
          cpf: usuarioLogin.cpf,
          id: usuarioLogin.id,
        },
        constants.JWT_KEY,
        {
          expiresIn: "365 days",
        }
      );
      res.status(200).send({
        mensagem: strings.msgUsuarioLogadoSucesso,
        token: token,
        pessoa: {
          id: usuarioLogin.id,
          nome: usuarioLogin.nome,
          cpf: usuarioLogin.cpf,
          // !! utilizado para converter o INTEGER EM BOOL
          conta_cliente: !!usuarioLogin.cliente,
          conta_fornecedor: !!usuarioLogin.fornecedor,
        },
      });
    } else {
      res.status(401).send({ error: strings.errorSenhaIncorreta });
    }
  });
}

module.exports = {
  async login(req, res) {
    const sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      const usuarioLogin = await Usuario(
        sequelize,
        Sequelize.DataTypes
      ).findOne({
        where: { cpf: req.body.cpf },
      });
      if (usuarioLogin !== null) {
        verificarSenha_(req, res, usuarioLogin);
      } else {
        res.status(401).send({ error: strings.errorUsuarioNaoEncontrado });
      }
    } catch (error) {
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },
};
