const { Sequelize, DataTypes } = require("sequelize");

// Create a new conection to your database, this should be extracted to a config file.
var getSequelize = function (nomedb) {
    return new Sequelize(nomedb, 'root', '1364', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
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
async function getDominio(str){
    return str.split('@')[1];
  }

module.exports = {
    getSequelize,
    countWords,
    getDominio,
}