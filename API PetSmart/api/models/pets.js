/** @format */

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes, nomeTable = "pets") => {
  class Pets extends Model {}
  Pets.init(
    {
      // Column ID auto generated
      apelido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      raca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ativo: DataTypes.BOOLEAN,
      id_usuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    }
  );
  return Pets;
};
