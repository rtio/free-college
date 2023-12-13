'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  class Matricula extends Model {
    static associate(models){
      Matricula.belongsTo(models.Curso,{
        foreignKey: 'curso_id',
        as: 'curso'
      });
      Matricula.belongsTo(models.Aluno, {
        foreignKey: 'aluno_id',
        as: 'aluno'
      });
    }
  }
  
  Matricula.init({}, {
    sequelize,
    underscored: true,

  });

  return Matricula;
};
=======
    class Matricula extends Model {
        static associate(models) {
            Matricula.belongsTo(models.Curso, {
                foreignKey: 'curso_id',
                as: 'curso'
            });
            Matricula.belongsTo(models.Aluno, {
                foreignKey: 'aluno_id',
                as: 'aluno'
            });
        }
    }
    
    Matricula.init({}, {
        sequelize,
        underscored: true,
    });

    return Matricula;
}
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
