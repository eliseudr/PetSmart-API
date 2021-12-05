/** @format */

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes, nomeTable = "agendamentos") => {
  class Agendamento extends Model {}
  Agendamento.init(
    {
      // Column ID auto generated
      tipo_agendamento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_agendamento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_pet: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_fornecedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    }
  );
  return Agendamento;
};
