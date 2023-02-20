import mysql from 'mysql'

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "f6257df774",
    database: "todos"
})

conn.connect()

export default conn