const db = require('../models');

const create = async (name, email, password) => {
  const [newUser, wasCreated] = await db.User.findOrCreate({
    where: { email: email },
    defaults: {
      name,
      password,
    },
  });
  return { user: newUser, wasCreated: wasCreated };
};

module.exports = {
  create,
};
