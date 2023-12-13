'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
<<<<<<< HEAD
    static associate(models){
      Professor.belongsTo(models.Departamento, {
      foreignkey: 'departamento_id',
      as: 'departamento'
    });
    Professor.hasMany(models.Curso, {
      foreignKey: 'professor_id',
      as: 'cursos'
    });
  }
}


=======
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
  
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
  Professor.init({
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
<<<<<<< HEAD
    }
=======
      }
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
  }, {
    sequelize,
    underscored: true,
  });

  return Professor;
}