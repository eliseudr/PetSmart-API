/** @format */

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes, nomeTable = "pets") => {
  class Pets extends Model {}
  Pets.init({});
  return Pets;
};
