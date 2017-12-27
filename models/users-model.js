const db = require('../config/dbConfig');

const usersDB = {};

usersDB.findAll = () => {
  return db.many(`
    SELECT *
    FROM users u
    ORDER BY u.username ASC`);
};

usersDB.findById = (id) => {
  return db.one(`
    SELECT *
    FROM users u
    INNER JOIN plans p ON u.plan_id=p.id
    WHERE u.id = $1
    `, id);
};

usersDB.save = (user) => {
  return db.one(`
    INSERT INTO users (plan_id, username, age, zip_code, income)
    VALUES ($/plan_id/, $/username/, $/age/, $/zip_code/, $/income/)
    RETRUNING *
      `, user);
};

usersDB.update = (user) => {
  return db.one(`
    UPDATE users
    SET
    plan_id = $/plan_id/,
    username = $/username/,
    age = $/age/,
    zip_code = $/zip_code/,
    income = $/income/
    WHERE id = $/id/
    RETRUNING *
      `, user);
};

usersDB.destroy = (id) => {
  return db.none(`
    DELETE
    FROM users
    WHERE id = $1
    `, id);
};

module.exports = usersDB;
