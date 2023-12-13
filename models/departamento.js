'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Departamento extends Model { }

  Departamento.init({
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  }, {
    sequelize,
    underscored: true,
  });

  return Departamento;
}