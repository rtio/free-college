'use strict';
const {
  Model
} = require('sequelize');
const { Professor, Sala } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Curso.init({
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Professor,
          key: 'id',
        },
      },
      sala_id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: Sala,
          key: 'id',
        },
      }
  }, {
    sequelize,
    underscored: true,
  });
  return Curso;
};