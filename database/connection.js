const mysql= require("mysql");

connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"thuluyen",
    database:"nodejs"
})
//VALUES(?,?,?)",[name,quantity,category]// truyen tham so
// connection.query("INSERT INTO Item(itemname,quantity,category) VALUES ('${itemname}', '$")
connection.query("SELECT * FROM Item", (err, result) =>{
    console.log(err),
    console.log(result)
})