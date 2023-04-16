const mysql= require("mysql");

require('dotenv').config()

connection = mysql.createPool({
    host: process.env.ENV_HOST,
    user: process.env.ENV_USER,
    password: process.env.ENV_PASSWORD,
    database: process.env.ENV_DATABASE
})

connection.getConnection((err,connection) => {
    if (err)
        console.log(err)
    else
        console.log('connected')
})

//VALUES(?,?,?)",[name,quantity,category]// truyen tham so
// connection.query("INSERT INTO Item(itemname,quantity,category) VALUES ('${itemname}', '$")
// connection.query("SELECT * FROM users", (err, result) =>{
//     console.log(err),
//     console.log(result)
// })
module.exports = connection;