const db = require('../config/dbConfig');

const plansDB = {};

plansDB.findAll = () => {
  return db.many('SELECT * FROM plans');
};

plansDB.findById = (id) => {
  return db.one(`
    SELECT * FROM plans
    WHERE id = $1
  `, [id]);
};

module.exports = plansDB;
