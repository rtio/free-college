var { execSql } = require('./conn');

async function getMatriculasPorAlunoId(alunoId) {
    return execSql('SELECT m.id as matricula, c.id as curso_id, c.nome as curso FROM Matriculas as m INNER JOIN Cursos as c ON m.curso_id = c.id WHERE m.aluno_id = ?', [alunoId]);
}

module.exports = {
    getMatriculasPorAlunoId
}