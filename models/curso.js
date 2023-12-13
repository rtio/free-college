'use strict';
const {
<<<<<<< HEAD
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
=======
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Curso extends Model {
        static associate(models) {
            Curso.hasMany(models.Matricula, {
                foreignKey: 'curso_id',
                as: 'matriculas'
            });
            Curso.belongsTo(models.Professor, {
                foreignKey: 'professor_id',
                as: 'professor'
            });
            Curso.belongsTo(models.Sala, {
                foreignKey: 'sala_id',
                as: 'sala'
            });
        }
    }

    Curso.init({
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    }, {
        sequelize,
        underscored: true,
    });

    return Curso;
}
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
