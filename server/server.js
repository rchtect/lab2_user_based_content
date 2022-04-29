const express = require("express");
const cors = require("cors");
const app = express();
const channels = ["General", "Music", "Business", "Fitness"];
const userRoutes = require('./routes/userRoutes')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/users', userRoutes)
require('./connection')

const server = require('http').createServer(app);
const PORT = 8080
const socket = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, () => {
    console.log("Sever has been sucessfully initiated at port: ", PORT)
})