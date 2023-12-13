'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    static associate(models) {
      Professor.belongsTo(models.Departamento, {
        foreignKey: 'departamento_id',
        as: 'departamento'
      });
      Professor.hasMany(models.Curso, { 
        foreignKey: 'professor_id',
        as: 'cursos'
      });
    }
  }
  
  Professor.init({
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      }
  }, {
    sequelize,
    underscored: true,
  });

  return Professor;
}