const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const PORT = 8081;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + '/views');
app.set("view engine", "handlebars");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    let testUser = {
        name: "Daniel",
        last_name: "Díaz"
    }
    res.render('index', testUser)
})

app.listen(PORT, () => {
    console.log("Servidor corriendo");
})