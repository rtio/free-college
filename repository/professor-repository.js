var { execSql } = require('./conn');

async function getProfessorPorCurso(cursoId) {
    const result = await execSql('SELECT p.id, p.nome FROM Professores p INNER JOIN Cursos c ON p.id = c.professor_id WHERE c.id = ?', [cursoId]);
    return result[0];
}

module.exports = {
    getProfessorPorCurso
}