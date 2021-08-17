/** @format */

const { Sequelize, DataTypes } = require("sequelize");

// Create a new conection to your database, this should be extracted to a config file.
var getSequelize = function (nomedb) {
  return new Sequelize(nomedb, "root", "1364", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
};

//Method from: https://stackoverflow.com/questions/18679576/counting-words-in-string/30335883
function countWords(str) {
  var matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}

// This is not practical and might be replaced in the near future.
// This function split the string in 2 at '@'
async function getDominio(str) {
  return str.split("@")[1];
}

/**
 * Para não necessitar a criação de repetidas mensagens "Registro editado com sucesso" para
 * as diferentes tables, utilizamos apenas o final da mensagem e o início (Pessoa/Liberação/Acesso...)
 * é buscado e formatado pelo nome da table.
 * @return {string} NomeTableSingular editado com sucesso.*/
var getMsgEdicao = function (model) {
  let nome;
  if (typeof model === "string" || model instanceof String) {
    nome = model;
  } else {
    nome = getNomeTableSingular_(model);
  }
  return {
    mensagem: nome + strings.msgEditadoSucesso,
    id: model.id,
  };
};

module.exports = {
  getSequelize,
  countWords,
  getDominio,
  getMsgEdicao,
};
