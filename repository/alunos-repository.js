var conn = require('./conn');

async function getAlunos() {
    return execSql('SELECT id, nome, email FROM Alunos', []);
}

async function getAluno(id) {
    return execSql('SELECT id, nome, email FROM Alunos WHERE id = ?', [id]);
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
    editAluno
}
