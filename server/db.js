const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "34.89.63.253",
  port: 5432,
  database: "supersystems_dev_new5"
});

module.exports = pool;
