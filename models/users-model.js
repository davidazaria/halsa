const db = require('../config/dbConfig');

class UsersDB {
  constructor(users) {
    this.id = users.id || null;
    this.username = this.__validate(users.username, 'username');
    this.age = this.__validate(users.age, 'age');
    this.zip_code = this.__validate(users.zip_code, 'zip_code');
    this.plan_id = this.__validate(users.plan_id, 'plan_id');
    this.income = this.__validate(users.income, 'income');
  }

  __validate(property, propType) {
    if (propType === 'age') {
      const age = /^\d+$/;
      if (!property.match(age)) throw new Error('invalid age');
    }
    if (property) return property;
    else throw new Error(`Missing property ${propType}`);
  }

  static findAll() {
    return db.manyOrNone('SELECT * FROM users u ORDER BY u.username ASC');
  }

  static findById(id) {
    return db.one(`
    SELECT *
    FROM users u
    INNER JOIN plans p ON u.plan_id=p.id
    WHERE u.id = $1
    `, id)
      .then(users => new UsersDB(users));
  }

// usersDB.save = (user) => {
//   return db.one(`
//     INSERT INTO users (plan_id, username, age, zip_code, income)
//     VALUES ($/plan_id/, $/username/, $/age/, $/zip_code/, $/income/)
//     RETRUNING *
//       `, user);
// };

// usersDB.update = (user) => {
//   return db.one(`
//     UPDATE users
//     SET
//     plan_id = $/plan_id/,
//     username = $/username/,
//     age = $/age/,
//     zip_code = $/zip_code/,
//     income = $/income/
//     WHERE id = $/id/
//     RETRUNING *
//       `, user);
// };

// usersDB.destroy = (id) => {
//   return db.none(`
//     DELETEs
//     FROM users
//     WHERE id = $1
//     `, id);
// };
}

module.exports = UsersDB;
