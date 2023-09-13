const express = require('express');
const path = require("path")
const petsRouter = require("./routes/pets.router")
const usersRouter = require("./routes/user.router")
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use("/", petsRouter)
app.use("/", usersRouter)


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
