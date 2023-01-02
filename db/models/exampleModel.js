const db = require("../database");
const Sequelize = require("sequelize");

const Example = db.define("example", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Example;
