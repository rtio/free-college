const { Matricula } = require('../models/matricula');

async function getMatriculas() {
    return Matricula.findAll();
}

async function getMatricula(id) {
    return Matricula.findByPk(id);
}

async function addMatricula(matricula) {
    const newMatricula = await Matricula.create({
        aluno_id: matricula.aluno_id,
        curso_id: matricula.curso_id,
    });
    return newMatricula;
}

async function deleteMatricula(id) {
    return Matricula.destroy({ where: { id } });
}

module.exports = {
    getMatriculas,
    getMatricula,
    addMatricula,
    deleteMatricula
}
