const express = require('express');
const user_router = express.Router();

const connection = require('../database/connection')
user_router.use(express.json())
// user_router.use(express.urlencoded())

user_router.get("/",(req, res) =>{
    connection.query("SELECT * FROM users", (err, result) => {
        if( err) console.log(err)
        res.status(200).json(result)
    })
})

user_router.get("/:id",(req, res) =>{
    const userId = parseInt(req.params.id);
    connection.query("SELECT * FROM users where id= ?",[userId], (err, result) => {
        if( err) console.log(err)
        res.status(200).json(result)
    })
})
user_router.put("/:id",(req, res) =>{
    const userId = parseInt(req.params.id);
    console.log(req.body);
    // const {fullname,gender, age} = req.body
    connection.query("UPDATE users SET fullname = ?, gender = ?, age= ? WHERE id= ?",[req.body.fullname,req.body.gender,req.body.age,userId], (err, result) => {
        if( err) console.log(err)
        res.status(204)
    })
    // // Tìm user có id tương ứng trong danh sách users
    // const user = users.find(u => u.id === userId);

    // // Kiểm tra xem user có tồn tại hay không
    // if (useridx === -1) {
    //     res.status(404).send('User not found');
    // }
    // users[useridx]= {
    //     "id": userId,
    //     "fullname": req.body.fullname,
    //     "gender": req.body.gender,
    //     "age" : req.body.age
    // }
       
    // res.status(204)
})

user_router.post("/", (req,res) => {
    const userId = parseInt(req.params.id);
    // const {fullname,gender, age} = req.body
    connection.query("INSERT INTO users(fullname, gender, age) VALUES (?,?,?)",[req.body.fullname,req.body.gender,req.body.age], (err, result) => {
        if( err) console.log(err)
        res.status(201).json(result)
    })
})

user_router.delete("/:id",(req, res) =>{
    const userId = parseInt(req.params.id);
    const {fullname,gender, age} = req.body
    connection.query("DELETE users WHERE id=?",[userId], (err, result) => {
        if( err) console.log(err)
        res.status(204)
    })
})

// Exports cho biến user_router
module.exports = user_router;
// module.exports = connection;

