'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
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