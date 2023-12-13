'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
<<<<<<< HEAD
=======

>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    sequelize,
    underscored:true,

  });

  return User;
}