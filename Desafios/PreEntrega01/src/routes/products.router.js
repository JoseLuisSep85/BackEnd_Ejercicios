const express = require('express');
const { parse } = require('tar/lib/pax');
const router = express.Router();

const products = [];

router.get("/api/products", (req, res) => {
  res.json(products)  
})

router.get("/api/products/:pid", (req, res) => {
    const pid = parseInt(req.params.pid);
    console.log(pid);

    const product = products.find((product) => product.id === pid);
    
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    return res.json(product);
  })

router.post("/api/products", (req, res) => {
    const newProduct = req.body

    if (!newProduct.id ||
        !newProduct.name ||
        !newProduct.price ||
        !newProduct.description ||
        !newProduct.code ||
        !newProduct.stock ||
        !newProduct.category) {
        return res.status(400).json({message: 'Debe proporcionar todos los campos()'})
        }
    products.push(newProduct)
    res.json({message: "Producto Agregado"})
})

router.put("/api/products/:pid", (req, res) => {
    const pid = parseInt(req.params.pid);
    const updateFields = req.body;
    
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'Debe proporcionar almenos un campo a actualizar.' });
    }

    const productIndex = products.findIndex((product) => product.id === pid);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    products[productIndex] = {
        ...products[productIndex],
        updateFields
    };

    return res.json(products[productIndex]);

});

router.delete("/api/products/:pid", (req, res) => {
    const pid = parseInt(req.params.pid);
    const productIndex = products.find((product) => product.id === pid);
    if (productIndex === -1) {
        return res.status(400).json({ error: 'Producto no encontrado' });
    }
    const deleteProduct = products.splice(productIndex, -1);
    return res.json(deleteProduct[0]);

})

module.exports = router;