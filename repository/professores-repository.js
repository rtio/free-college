const { Professores } = require('../models/models');

async function getProfessorPorCurso(cursoId) {
    // todo: implementar
}

async function getProfessores() {
    return Professores.findAll({ attributes: ['id', 'nome'] });
}

async function getProfessoresCursos() {
    try {
        const professores = await Professores.findAll({ attributes: ['id', 'nome'] });

        for (const professor of professores) {
            const cursos = await professor.getCursos();
            professor.dataValues.cursos = cursos;
        }

        return professores;
    } catch (error) {
        throw new Error('Erro ao buscar alunos e cursos: ' + error.message);
    }
}

module.exports = {
    getProfessorPorCurso,
    getProfessores,
    getProfessoresCursos
}