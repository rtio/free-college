const { findUserByToken } = require('../repository/user-repository');

const generateToken = () => {
    return Math.random().toString(36).substr(2); // Simple token generator
};

const authenticateToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log('Token recebido:', token);
    const user = await findUserByToken(token);
    console.log('Usuário encontrado no banco:', user);
    if (user) {
        console.log('Usuário autenticado');
        req.user = user;
        return next();
    }

    return res.sendStatus(403);
};

module.exports = {
    generateToken,
    authenticateToken,
};
