const userRepository = require('../repositories/users');
const { encryptPassword, checkPassword } = require('../helpers/encryption');
const ResourceAlreadyExists = require('../errors/resourceAlreadyExists');
const ResourceNotFound = require('../errors/resourceNotFound');
const Unauthorized = require('../errors/unauthorized');
const { createToken } = require('../middlewares/tokenHandler');

const register = async (name, email, password) => {
  const hashedPassword = await encryptPassword(password);
  const newUser = await userRepository.create(name, email, hashedPassword);
  if (!newUser.wasCreated)
    throw new ResourceAlreadyExists(`user with email ${email} already exists`);
  return newUser.user;
};

const login = async (email, password) => {
  const user = await userRepository.searchOne(email);
  if (!user) throw new ResourceNotFound('User does not exists');

  const hashedPassword = user.password;
  const isCorrectPassword = await checkPassword(password, hashedPassword);
  if (!isCorrectPassword) throw new Unauthorized('Incorrect password');

  const token = await createToken({
    id: user.id,
    name: user.name,
    email: user.email,
  });

  return { user, token };
};

module.exports = {
  register,
  login,
};
