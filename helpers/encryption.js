const bcrypt = require('bcrypt');
const { hash } = require('bcrypt');
const saltRounds = 10;

const encryptPassword = async (plainPassword) => {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

const checkPassword = async (plainPassword, hashedPassword) => {
  const isCorrectPassword = await bcrypt.compare(plainPassword, hashedPassword);
  return isCorrectPassword;
};

module.exports = {
  encryptPassword,
  checkPassword,
};
