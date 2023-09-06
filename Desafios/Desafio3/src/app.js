const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.urlencoded({extended: true}))

const productos = [
    { id: 1, nombre: "Apple Iphone 14", precio: 799000, categoria: "smartphone" },
    { id: 2, nombre: "Samsung Galaxy s23", precio: 899000, categoria: "smartphone" },
    { id: 3, nombre: "Huawei P50", precio: 999000, categoria: "smartphone" },
    { id: 4, nombre: "Xbox serie S", precio: 299000, categoria: "videojuegos" },
    { id: 4, nombre: "PlayStation 5", precio: 599000, categoria: "videojuegos" }
    
]

app.get("/", (req, res) => {
    const categoria = req.query.categoria
    if (!categoria) return res.send(productos)
    
    const productosFiltrados = productos.filter(p => p.categoria === categoria)
        
    res.send({ productos:productosFiltrados })
})

app.get("/products",(req, res)=> {
    res.send(productos)
})


app.get("/products/:idProduct", (req, res) => {
    const idProduct = parseInt(req.params.idProduct)

    const product = productos.find(p => p.id === idProduct)
    if (!product) return res.send({ error: "Producto no encontrado" })
    
    res.send(product)
})



app.listen(PORT, () => {
    console.log("Servidor Express");
})