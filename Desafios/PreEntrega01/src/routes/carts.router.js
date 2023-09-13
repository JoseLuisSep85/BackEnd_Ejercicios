const express = require('express');
const router = express.Router();

const carts = [];

router.get("/api/carts", (req, res) => {
  res.json(carts)  
})

router.post("/api/carts", (req, res) => {
    const newCart = req.body
    products.push(newCart)
    res.json({message: "Carro agregado"})
})

module.exports = router;