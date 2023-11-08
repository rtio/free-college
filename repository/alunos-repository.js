var { execSql } = require('./conn');
var { getMatriculasPorAlunoId } = require('./matriculas-repository');
var { getProfessorPorCurso } = require('./professor-repository');

async function getAlunos() {
    return execSql('SELECT id, nome, email FROM Alunos', []);
}

async function getAlunosCursos() {
    const alunos = await execSql('SELECT id, nome FROM Alunos', []);
    for (const aluno of alunos) {
        const matriculas = await execSql('SELECT m.id as matricula, c.nome as curso FROM Matriculas as m INNER JOIN Cursos as c ON m.curso_id = c.id WHERE m.aluno_id = ?', [aluno.id]);
        aluno['matriculas'] = matriculas;
    }
    return alunos;
}

async function getAlunoCursos(id) {
    const aluno = await getAluno(id);
    const matriculas = await getMatriculasPorAlunoId(id);
    const cursos = [];
    for (const matricula of matriculas) {
        const professor = await getProfessorPorCurso(matricula.curso_id);
        cursos.push({
            id: matricula.matricula,
            nome: matricula.curso,
            professor: professor
        });
    }
    aluno['cursos'] = cursos;
    return aluno;
}

async function getAluno(id) {
    const result = await execSql('SELECT id, nome, email FROM Alunos WHERE id = ?', [id]);
    return result[0];
}

async function addAluno(aluno) {
    return execSql('INSERT INTO Alunos (nome, email) VALUES (?, ?)', [aluno.nome, aluno.email]);
}

async function deleteAluno(id) {
    return execSql('DELETE FROM Alunos WHERE id = ?', [id]);
}

async function editAluno(aluno) {
    return execSql('UPDATE Alunos SET nome = ?, email = ? WHERE id = ?', [aluno.nome, aluno.email, aluno.id]);
}

async function execSql(sql, params) {
    return new Promise((resolve, reject)=>{
        conn.connection.query(sql, params, function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

module.exports = {
    getAlunos,
    addAluno,
    getAluno,
    deleteAluno,
    editAluno,
    getAlunosCursos,
    getAlunoCursos
}
