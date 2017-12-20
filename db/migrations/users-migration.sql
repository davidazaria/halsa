\c halsa_health

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  plan_id INTEGER REFERENCES plans,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  age BIGINT,
  zip_code VARCHAR(255),
  household_size BIGINT,
  income BIGINT
);

CREATE INDEX ON users (first_name);
