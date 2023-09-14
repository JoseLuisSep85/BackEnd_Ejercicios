const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');


module.exports = class CartManager {
    constructor() {
        this.param = "./src/models/carts.json";
        
    }

    readProducts = async () => {
        const carts = await fs.readFile(this.path, "utf-8")
        return JSON.parse(carts)
    }
    
    writeProducts = async (cart) => {
        await fs.writeFile(this.path, JSON.stringify(cart))
    }

    addCarts = async () => {
        const cartsOld = await this.readProducts();
        const id = uuidv4();
        const cartsConcat = [{ id: id, products: [] }, ...cartsOld]
        await this.writeProducts(cartsConcat)
        return "Carrito agregado"

    }
}


