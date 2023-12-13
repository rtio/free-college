'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    static associate(models) {
      Aluno.hasMany(models.Matricula, {
        foreignKey: 'aluno_id',
        as: 'matriculas'
      })
    }
  };

  Aluno.init({
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
  });
  return Aluno;
};