const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const { addUser, findUserByEmail } = require('../repository/user-repository');

const saltRounds = 10; // Custos para gerar o hash

router.post('/', async (req, res) => {
    const user = req.body;
    // checa se o usuário já existe
    const existingUser = await findUserByEmail(user.email);
    if (existingUser) {
        return res.status(409).json('Usuário já existe');
    }

    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    const result = await addUser(user);

    // limpar o token/password antes de retornar
    result.password = undefined;
    result.token = undefined;
    
    res.status(201).json(result);
});

module.exports = router;