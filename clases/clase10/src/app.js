const express = require("express");
const { Socket } = require("socket.io");
const app = express();
const http = require("http").createServer(app)
const io = require(Socket.io)(http)
const path = require("path");
const PORT = 8080;

app.use(express.static(path.join(__dirname, "/src/public")))

let message = [];

io.on('connection', (socket) => {
    socket.emit()
})



app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`)
})