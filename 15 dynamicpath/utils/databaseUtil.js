const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sudhakar@#90",
  database: "sudhakarthakur",
});

module.exports = pool.promise();
