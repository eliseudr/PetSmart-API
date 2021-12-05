/** @format */

const { Sequelize, DataTypes } = require("sequelize");
const Agendamentos = require("../models/agendamentos");
const helpers = require("../helpers/helpers");
const strings = require("../helpers/strings");
const constants = require("../helpers/constants");

module.exports = {
  async getById(req, res) {
    const sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      const agendamentos = await Agendamentos(
        sequelize,
        Sequelize.DataTypes
      ).findOne({
        where: {
          id: req.params.id,
        },
      });
      res.send(agendamentos || {});
    } catch (error) {
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },

  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      await Agendamentos(sequelize, Sequelize.DataTypes).create({
        tipo_agendamento: req.body.tipo_agendamento,
        data_agendamento: req.body.data_agendamento,
        id_pet: req.body.id_pet,
        id_fornecedor: req.body.id_fornecedor,
        id_usuario: req.body.id_usuario,
      });
      res.status(200).send({ registrado: strings.agendamentoRegistrado });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },

  async update(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      await Agendamentos(sequelize, Sequelize.DataTypes).update(
        {
          apelido: req.body.apelido,
          nascimento: req.body.nascimento,
          raca: req.body.raca,
          id_usuario: req.body.id_usuario,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).send(strings.msgAgendamentoEditado);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },

  async delete(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      await Agendamentos(sequelize, Sequelize.DataTypes).update(
        {
          ativo: false,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).send(strings.msgAgendamentoRemovido);
    } catch (error) {
      res.status(500).send({ error: error });
      console.log(error);
    } finally {
      sequelize.close();
    }
  },
};
