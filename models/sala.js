'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
    static associate(models){
      professor.belongsTo(models.Departamento, {
        foreignkey: 'departamento_id',
        as: 'departamento'
      });
  

      professor.hasMany(models.Curso, {
        foreignkey: 'professor_id',
        as: 'cursos'
      });
    }
  }

  Professor.init({
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      capacidade: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  }, {
    sequelize,
    underscored: true,
  });
  return Sala;
};