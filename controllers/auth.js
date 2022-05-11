const authServices = require('../services/auth');

const register = async (name, email, password) => {
  const newUser = await authServices.register(name, email, password);
  return {
    message: 'User Created Successfully',
    data: { id: newUser.id, name: newUser.name, email: newUser.email },
  };
};

const login = async (email, password) => {
  const loggedUser = await authServices.login(email, password);
  const userData = loggedUser.user;
  const userToken = loggedUser.token;
  return {
    message: 'Logged in',
    data: { id: userData.id, name: userData.name, email: userData.email },
    token: userToken,
  };
};
module.exports = {
  register,
  login,
};
