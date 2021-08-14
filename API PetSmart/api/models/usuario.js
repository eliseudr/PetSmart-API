"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes, nomeTable = "usuarios") => {
  class UserLogin extends Model {}
  UserLogin.init(
    {
      // Column ID auto generated
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cliente: DataTypes.INTEGER,
      fornecedor: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    }
  );
  return UserLogin;
};