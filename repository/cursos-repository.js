const { Cursos, Salas, Professores } = require('../models/models');

async function getCursos() {
    return Cursos.findAll({ attributes: ['id', 'nome'] });
}

async function getCurso(id) {
    return Cursos.findByPk(id, { attributes: ['id', 'nome'] , include: [Salas, Professores]});
}

async function addCurso(curso) {
    try {
        const newCurso = await Cursos.create({
            nome: curso.nome,
            professor_id: curso.professor_id,
            sala_id: curso.sala_id,
        });
        console.log('New Curso:', newCurso); // Add this logging statement
        return newCurso;
    } catch (error) {
        console.error('Error creating curso:', error);
        throw error;
    }
}

async function deleteCurso(id) {
    return Cursos.destroy({ where: { id } });
}

async function editCurso(curso) {
    try {
        const updatedCurso = await Cursos.findByPk(curso.id);
        if (!updatedCurso) {
            throw new Error('Curso não encontrado');
        }
        updatedCurso.nome = curso.nome;
        await updatedCurso.save();
        return updatedCurso;
    } catch (error) {
        throw new Error('Erro ao atualizar curso: ' + error.message);
    }
}

module.exports = {
    getCursos,
    getCurso,
    addCurso,
    deleteCurso,
    editCurso
}