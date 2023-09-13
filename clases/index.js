

function numerorandom(minimo, maximo, cantidad) {
    return Array.from({ length: cantidad }, () => Math.floor(Math.random() * (maximo - minimo + 1)) + minimo)
}

const numeros = numerorandom(1, 20, 100)

const resultado = {}

numeros.forEach(n => resultado[n] = (resultado[n] || 0) + 1)

console.log(resultado)