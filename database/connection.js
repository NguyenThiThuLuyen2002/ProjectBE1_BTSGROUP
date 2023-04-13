const mysql= require("mysql");

connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"thuluyen",
    database:"nodejsDB"
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
module.exports = connection