'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
    static associate(models) {
      Sala.hasOne(models.Curso, {
        foreignKey: 'sala_id',
        as: 'sala'
      });
    }
  }
  
  Sala.init({
    numero: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  }, {
    sequelize,
    underscored: true,
  });

  return Sala;
}