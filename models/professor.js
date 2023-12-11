'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Professor.init({
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      departamento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Departamentos',
          key: 'id',
        },
      }
  }, {
    sequelize,
    underscored: true,
  });
  return Professor;
};