const authServices = require('../services/auth');

const register = async (name, email, password) => {
  const newUser = await authServices.register(name, email, password);
  return {
    message: 'User Created Successfully',
    data: { id: newUser.id, name: newUser.name, email: newUser.email },
  };
};

module.exports = {
  register,
};
