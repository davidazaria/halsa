const db = require('../config/dbConfig');

const Plan = {};

//need to verify whether we need a validator

Plan.findAll = () => {
  return db.many('SELECT * FROM plans');
};

Plan.findById = (id) => {
  return db.one(`
    SELECT * FROM plans
    WHERE id = $1
  `, [id]);
};

module.exports = Plan;
