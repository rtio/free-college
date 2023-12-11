'use strict';
const {
  Model
} = require('sequelize');
const { Curso, Aluno } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matricula.init({
    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Aluno,
          key: 'id',
        },
      },
      curso_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Curso,
          key: 'id',
        },
      }
  }, {
    sequelize,
    underscored: true,
  });
  return Matricula;
};