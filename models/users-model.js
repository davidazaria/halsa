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
    INSERT INTO users (plan_id, username, age, zip_code, household_size, income)
    VALUES ($/plan_id/, $/username/, $/age/, $/zip_code/, $/household_size/, $/income/)
    RETRUNING *
      `, user);
};

User.update = (user) => {
  return db.one(`
    UPDATE users
    SET
    plan_id = $/plan_id/,
    username = $/username/,
    age = $/age/,
    zip_code = $/zip_code/,
    household_size = $/household_size/,
    income = $/income/
    WHERE id = $/id/
    RETRUNING *
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
