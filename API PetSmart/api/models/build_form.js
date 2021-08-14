"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes, nomeTable = "forms") => {
  class BuildForm extends Model {}
  BuildForm.init(
    {
      texto: DataTypes.STRING,
      email: DataTypes.STRING,
      data_minima: DataTypes.DATE,
      data_maxima: DataTypes.DATE,
      qtd_opcoes_lista_suspensa: DataTypes.INTEGER,
      qtd_respostas_min: DataTypes.INTEGER, 
      qtd_respostas_max: DataTypes.INTEGER, 
      id_form_config: DataTypes.INTEGER,
      // Insert the user who insert the form
      // id_pessoa: {
      //   type: Sequelize.INTEGER,
      // },
    },
    {
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    }
  );
  return BuildForm;
};
