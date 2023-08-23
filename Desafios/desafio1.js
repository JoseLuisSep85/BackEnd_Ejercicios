
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
}

const productManager = new ProductManager()


//agregar productos

//producto 1
productManager.addProduct("Sin titulo", "Sin descripcion", 200, "Sin imagen", "abc123", 25)

//producto 2 con code repetido
productManager.addProduct("Sin titulo 2", "Sin descripcion 2", 300, "Sin imagen 2", "abc123", 25)

//producto 3 con code distinto
productManager.addProduct("Sin titulo 3", "Sin descripcion 3", 400, "Sin imagen 3", "abc1234", 25)

//producto 4 con datos faltantes
productManager.addProduct("Sin titulo 4", 400, 25)


//obtener productos
const productos = productManager.getProducts()
console.log("Productos: ", productos);

// buscar productos por id
const buscarProductos = productManager.getProductById(1)
console.log(buscarProductos);