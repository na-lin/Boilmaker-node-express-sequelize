const Sequelize = require("sequelize");

// replace boilermaker with your database name
const db_url = "postgres://localhost:5432/boilermaker";

const db = new Sequelize(db_url, {
  logging: false,
});

module.exports = db;
