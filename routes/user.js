const express = require('express');
const user_router = express.Router();

const connection = require('../database/connection')
let users = [
	{
		"id": 1,
		"fullname": "Nguyen Van A",
		"gender": true,
		"age": 21
	},
	{
		"id": 2,
		"fullname": "Nguyen Van B ",
		"gender": false,
		"age": 22
	}
]
user_router.get("/",(req, res) =>{
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    
    // Trả về đối tượng JSON với mã trạng thái HTTP là 200
    res.status(200).json(users);
})

user_router.get("/:id",(req, res) =>{
    const userId = parseInt(req.params.id);
    // Tìm user có id tương ứng trong danh sách users
    const user = users.find(u => u.id === userId);

    // Kiểm tra xem user có tồn tại hay không
    if (!user) {
        res.status(404).send("User not found")
    }
    res.status(200).json(user);
})
user_router.put("/:id",(req, res) =>{
    const userId = parseInt(req.params.id);
    const useridx = users.findIndex(u => u.id === userId);
    if (useridx === -1) {
        res.status(404).send('User not found');
    }
    users[useridx]= {
        "id": userId,
        "fullname": req.body.fullname,
        "gender": req.body.gender,
        "age" : req.body.age
    }
       
    res.status(204)
})

user_router.post("/", (req,res) => {
    newuser= {
        "id":users.length + 1,
        "fullname": req.body.fullname,
        "gender": req.body.gender,
        "age" : req.body.age
    }
    users.push(newuser)
    res.status(201).json(users)
})

user_router.delete("/:id",(req, res) =>{
    const userId = parseInt(req.params.id);
    // Tìm user có id tương ứng trong danh sách users
    const useridx = users.findIndex(u => u.id === userId);

    if (useridx === -1) {
        res.status(404).send('User not found');
    }
    users.splice(useridx, 1);
    res.status(204)
})

// Exports cho biến user_router
module.exports = user_router;
