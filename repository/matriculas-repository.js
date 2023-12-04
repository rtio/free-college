const { Matriculas } = require('../models');

async function getMatriculas() {
    return Matriculas.findAll();
}

async function getMatricula(id) {
    return Matriculas.findByPk(id);
}

async function addMatricula(matricula) {
    const newMatricula = await Matriculas.create({
        aluno_id: matricula.aluno_id,
        curso_id: matricula.curso_id,
    });
    return newMatricula;
}

async function deleteMatricula(id) {
    return Matriculas.destroy({ where: { id } });
}

module.exports = {
    getMatriculas,
    getMatricula,
    addMatricula,
    deleteMatricula
}
