const Router = require('express');
const CartManager= require("../controllers/CartManager")
const CartRouter = Router();

const carts = new CartManager();

CartRouter.get("/", async (req, res) => {
    res.send(await carts.readProducts)
})

CartRouter.post("/", async (req, res) => {
    res.send(await carts.addCarts)
})


module.exports = CartRouter;