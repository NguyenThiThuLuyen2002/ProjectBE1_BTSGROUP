const express = require("express")
const app = express()


// Require user route
const userRoute = require('./routes/user')

// Dùng userRoute cho tất cả các route bắt đầu bằng '/users'
// app.use('/users', userRoute);

app.use(express.json()) //body Json (put,post)
app.listen(8000, (port) => {
    console.log("App start")
})
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