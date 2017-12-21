// const db = require('../config/dbConfig');

// const User = {};

// User.findAll = () => {
//   return db.query('SELECT * FROM users');
// };

// User.findById = (id) => {
//   return db.oneOrNone(`
//     SELECT * FROM Users
//     WHERE id = $1
//   `, [id]);
// };

// User.create = (User, userId) => {
//   return db.one(`
//     INSERT INTO users
//     (title, description, genre, user_id)
//     VALUES ($1, $2, $3, $4)
//     RETURNING *
//   `, [User.username, User.age, User.zip_code, User.household_size, User.income, userId]);
// };

// User.update = (User, id) => {
//   return db.one(`
//     UPDATE users SET
//     title = $1,
//     description = $2,
//     genre = $3
//     WHERE id = $4
//     RETURNING *
//   `, [User.title, User.description, User.genre, id]);
// };

// User.destroy = (id) => {
//   return db.none(`
//     DELETE FROM users
//     WHERE id = $1
//   `, [id]);
// };

// module.exports = User;
