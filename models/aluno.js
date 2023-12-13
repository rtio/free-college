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
<<<<<<< HEAD
      })
=======
      });
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
    }
  };

  Aluno.init({
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: DataTypes.STRING
  }, {
    underscored: true,
    sequelize,
  });
  
  return Aluno;
}