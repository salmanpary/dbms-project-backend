const mysql=require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "dbms-project",
});
connection.connect((err) => {
    if (err) throw err;
    console.log("Connect to mysql database");
})
module.exports=connection;