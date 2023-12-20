const { User } = require('../models');

async function findUserByEmail(email) {
  return User.findOne({ where: { email: email } });
}

async function findUserByToken(token) {
  return User.findOne({ where: { token: token } });
}

async function addUser(user) {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function addUserToken(id, token) {
  try {
    const user = await User.findByPk(id);
    user.token = token;
    await user.save();
    return user;
  } catch (error) {
    console.error('Error adding user token:', error);
    throw error;
  }
}

async function invalidateUserToken(id) {
  try {
    const user = await User.findByPk(id);
    user.token = null;
    await user.save();
    return user;
  } catch (error) {
    console.error('Error invalidating user token:', error);
    throw error;
  }
}

module.exports = {
  findUserByEmail,
  addUser,
  addUserToken,
  invalidateUserToken,
  findUserByToken,
};
