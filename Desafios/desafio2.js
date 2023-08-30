
const fs = require('fs');


class ProductManager {
    constructor() {
        this.product = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const productoId = this.product.length + 1;
        const newProduct = {
            id: productoId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (this.product.find((product) => product.code === newProduct.code)) {
            console.log(`El codigo ${code} ya esta en uso`)
        } else if (Object.values(newProduct).includes(undefined)) {
            console.log("Todos los campos son requeridos");
        } else {
            this.product.push(newProduct)
        } return
    }

    getProducts() {
        return this.product
    }

    getProductById(id) {
        const buscarId = this.product.find((product) => product.id === id)
        if (!buscarId) {
            console.log("Not found")
        } else {
            console.log("Producto encontrado");
        } return
    }

    updateProduct(id, updatedProduct) {
        const actualizarProducto = this.product.findIndex((product) => product.id === id)
        if (actualizarProducto !== -1) {
            this.product[actualizarProducto] = {
                id, ...updatedProduct
            }
            fs.writeFileSync("productos.json", JSON.stringify((this.product)));
            console.log("Producto actualizado con exito");
        } else {
            console.error("No se pudo actualizar el producto", error);
        }
    }

    deleteProduct(id) {
        const eliminarProducto = this.product.findIndex((product) => product.id === id)
        if (eliminarProducto !== -1) {
            this.product.splice(eliminarProducto, 1)
            fs.writeFileSync("productos.json", JSON.stringify(productManager))
            console.log("Producto eliminado con exito");
        } else {
            console.error("No se puedo eliminar el producto")
        }
            

    }
}

const crearJson = () => {

    try {
        fs.writeFileSync("productos.json", JSON.stringify(productManager))
        console.log("Archivo creado de manera correcta");
    } catch (error) {
        console.error("Archivo no puede ser creado", error);
        
    }
}


const productManager = new ProductManager()


//agregar productos

productManager.addProduct("Sin titulo 1", "Sin descripcion 1", 200, "Sin imagen 1", "abc123", 25)
productManager.addProduct("Sin titulo 2", "Sin descripcion 2", 300, "Sin imagen 2", "abc1234", 25)
productManager.addProduct("Sin titulo 3", "Sin descripcion 3", 400, "Sin imagen 3", "abc12345", 25)

// crea el archivo .json con los objetos
crearJson();

// actualizar un producto
const updatedProduct = {
    title: "Sin titulo 4",
    description: "Sin descripcion 4",
    price: 500,
    thumbnail: "Sin imagen 4",
    code: "abc123456",
    stock: 25
};

productManager.updateProduct(2, updatedProduct);

productManager.deleteProduct(1);

