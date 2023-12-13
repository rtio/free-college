'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate (models){
      Curso.hasMany(models.Matricula,{

        foreignkey: 'curso_id',
        as:'matriculas'
      });

    Curso.belongsTo(models.Professor, {
      foreignkey: 'prefessor_id',
      as: 'professor'
    });

    Curso.belongsTo(models.Sala, {
      foreignkey: 'sala_id',
      as: 'Sala'

    });
  }
}

    
  Curso.init({
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      }
    },{
      sequelize,
      underscored:false,
    
    });
    return curso;
  }
