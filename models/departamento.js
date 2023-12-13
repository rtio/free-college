'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  class Departamento extends Model {}
=======
  class Departamento extends Model { }
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d

  Departamento.init({
    nome: {
      type:DataTypes.STRING(255),
      allowNull:false, 

        }
  }, {
    sequelize, 
    underscored: true,

  });
<<<<<<< HEAD
  return Departamento; 
=======

  return Departamento;
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
}