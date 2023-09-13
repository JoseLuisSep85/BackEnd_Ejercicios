const express = require('express');
const app = express();
const productsRouter = require('./routes/products.router');
const cartsRouter = require('./routes/carts.router');
const path = require('path');
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", productsRouter)
app.use("/", cartsRouter)



app.listen(PORT, () => {
    console.log(`Servidor corriendo el puerto ${PORT}`)
});