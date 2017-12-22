const options = {
  query: (e) => {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT BD_NAME,
  database: process.env.BD_NAME,
  user: process.env.DB_USER
}

function setDatabase() {
  return (
    return pgp(process.env.DATABASE_URL || config)
  )
}

const db = setDatabase();

module.exports = db;
