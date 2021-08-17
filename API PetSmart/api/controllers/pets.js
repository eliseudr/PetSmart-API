/** @format */

const { Sequelize, DataTypes } = require("sequelize");
const helpers = require("../helpers/helpers");
const strings = require("../helpers/strings");

module.exports = {
  async getAll(req, res) {
    const sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      const pets = await Pets(sequelize, Sequelize.DataTypes).findAll(
        getFiltro_(req)
      );
      res.status(200).send(pets || {});
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },

  async getById(req, res) {
    const sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      const pets = await Pets(sequelize, Sequelize.DataTypes).findOne({
        where: {
          id: req.params.id,
        },
      });
      res.send(pets || {});
    } catch (error) {
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },

  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      await Pets(sequelize, Sequelize.DataTypes).create({
        apelido: req.query.apelido,
        idade: req.query.idade,
        raca: req.query.raca,
        id_usuario: req.query.id_usuario,
      });
      res.status(200).send(strings.petRegistrado);
    } catch (error) {
      res.status(500).send({ error: error });
    } finally {
      sequelize.close();
    }
  },

  async update(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    try {
      await Pets(sequelize, Sequelize.DataTypes).update(
        {
          apelido: req.query.apelido,
          idade: req.query.idade,
          raca: req.query.raca,
          id_usuario: req.query.id_usuario,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).send(strings.msgPetEditado);
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
      await pets(sequelize, Sequelize.DataTypes).update(
        {
          ativo: false,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).send(strings.msgPetRemovido);
    } catch (error) {
      res.status(500).send({ error: error });
      console.log(error);
    } finally {
      sequelize.close();
    }
  },
};
