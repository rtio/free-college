const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const { findUserByEmail, addUserToken } = require('../repository/user-repository');
const { authenticateToken, generateToken } = require('../auth/util');

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: `Hello, ${req.user.name}` });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            console.log('Usuário autenticado');
            // Usuário autenticado
            const token = generateToken();
            console.log('Token gerado:', token);
            await addUserToken(user.id, token);
            console.log({ token: token });
            res.status(200).json({ token: token });
        } else {
            res.status(401).send('Senha errada');
        }
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

module.exports = router;
