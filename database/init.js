const express = require('express');

const connect = require('./connection')

// tạo bảng mới 
connection.query('CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY,	fullname NVARCHAR(255) NOT NULL, gender boolean NOT NULL,age INT NOT NULL)', (err, result) => {
    console.log(err),
    console.log(result)
  });

// Thực hiện truy vấn INSERT để thêm người dùng mới
connection.query("INSERT INTO users (fullname,gender,age) VALUES('Nguyễn Thị Thu',1,20)", (err, result) => {
    if (err) 
        console.log(err)
    else
        console.log('insert thành công !')
});
//xem
connection.query("SELECT * FROM users", (err, result) =>{
    console.log(err),
    console.log(result)
});

  
  