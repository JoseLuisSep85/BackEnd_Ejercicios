const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = 8080;

app.set("view engine","hbs")
app.set("wiews", path.join(__dirname, "views"))
app.get("/", (req, res) => {
    res.render("index", {title: "Aplicacion con websockets"})
})

app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`)
})

io.on("connection", socket => {
    console.log("Cliente conectado")
    
    socket.on("mensaje", (data) => {
        console.log("Mensaje recibido: ", data)
        io.emit("mensaje", data)
    })

    socket.on("disconnect", () => {
        console.log("El cliente se ha desconectado")
    })
} ) 