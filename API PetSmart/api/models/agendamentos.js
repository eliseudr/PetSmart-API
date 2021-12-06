/** @format */

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes, nomeTable = "view_agendamentos") => {
  class Agendamento extends Model {}
  Agendamento.init(
    {
      // Column ID auto generated
      tipo_agendamento: DataTypes.STRING,
      id_pet: DataTypes.INTEGER,
      nome_pet: DataTypes.STRING,
      raca: DataTypes.STRING,
      data_agendamento: DataTypes.STRING,
      id_usuario: DataTypes.INTEGER,
      nome_cliente: DataTypes.STRING,
      id_fornecedor: DataTypes.INTEGER,
      nome_fornecedor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    }
  );
  return Agendamento;
};
