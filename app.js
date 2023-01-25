const express = require('express')
const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")

const app = express()

app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)

app.get('/', (req, res) => {
    res.status(200).send('Hello from the server side')
})

module.exports = app  