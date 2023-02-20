const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "f6257df774",
    database: "todos"
})

conn.connect()

modules.exports = conn