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