'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
<<<<<<< HEAD
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
=======
    static associate(models) {
      Sala.hasOne(models.Curso, {
        foreignKey: 'sala_id',
        as: 'sala'
      });
    }
  }
  
  Sala.init({
    numero: {
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
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
}