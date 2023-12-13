'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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
