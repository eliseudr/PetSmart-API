"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes, nomeTable = "form_info") => {
  class BuildFormInfo extends Model {}
  BuildFormInfo.init(
    {
      // Column ID auto generated
      // Information
      opcao: DataTypes.STRING, 
      // FOREIGN KEY (FORMS)
      id_form: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }, 
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    }
  );
  return BuildFormInfo;
};