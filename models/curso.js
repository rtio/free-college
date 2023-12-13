'use strict';
const {
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