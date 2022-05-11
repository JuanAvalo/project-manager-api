const authRepository = require('../repositories/users');
const { encryptPassword } = require('../helpers/encryption');
const ResourceAlreadyExists = require('../errors/resourceAlreadyExists');

const register = async (name, email, password) => {
  const hashedPassword = await encryptPassword(password);
  const newUser = await authRepository.create(name, email, hashedPassword);
  if (!newUser.wasCreated)
    throw new ResourceAlreadyExists(`user with email ${email} already exists`);
  return newUser.user;
};

module.exports = {
  register,
};
