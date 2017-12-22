const db = require('../config/dbConfig');

const User = {};

User.findAll = () => {
  return db.many(`
    SELECT *
    FROM users
    INNER JOIN plans p ON u.plan_id=p.id
    ORDER BY u.username ASC`);
};

User.findById = (id) => {
  return db.one(`
    SELECT *
    FROM users u
    INNER JOIN plans p ON u.plan_id=p.id
    WHERE u.id = $1
    `, id);
};

User.save = (user) => {
  return db.one(`
      `, user);
};

User.update = (user) => {
  return db.one(`
      `, user);
};

User.destroy = (id) => {
  return db.none(`
    DELETE
    FROM users
    WHERE id = $1
    `, id);
};

module.exports = User;
