const express = require('express');
const ProductRouter = require('./routes/products.router.js');
const CartRouter = require('./routes/carts.router.js');

const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", ProductRouter)
app.use("/api/cart", CartRouter)

app.listen(PORT, () =>
console.log(PORT))