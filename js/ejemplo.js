class Producto{
    constructor(name, id, type, price, stock, description){
        this.name = name;
        this.id = id;
        this.type = type;
        this.price = price;
        this.stock = stock;
        this.description = description;
    }
}

const productosList = [
    {
        name: "calza",
        id: "3",
        type: "woman",
        price: 10000,
        stock: 25,
        description: "Calza tricolor gris,negra y celeste larga con calce perfecto"
    },
    {
     name: "remera",
     id: "2",
     type: "men",
     price: 500,
     stock: 30,
     description: "Remera de hombre urbana con estampa de dragon"   
    },
    {
        name: "gorra",
        id: "1",
        type: "accesorios",
        price: 1000,
        stock: 26,
        description:"Gorra color beige con bordado de una rosa"
    }
]

const agregarProducto = ({name, id, type, price, stock, description})=>{
    if(productos.some(prod=>prod.id===id)){
    } else {
        const productoNuevo = new Producto(name, id, type, price, stock, description)
        productos.push(productoNuevo)
        localStorage.setItem('productos', JSON.stringify(productos))
    }
}

const productosPreexistentes = ()=>{
    if (productos.length===0){
        productosList.forEach(prod=>{
            let prev = JSON.parse(JSON.stringify(prod))
                agregarProducto(prev)}
            )
    }
}

const renderizarProductos = (productosList)=>{
    const contenedorProductos = document.getElementById("contenedorProductos")
    contenedorProductos.innerHTML = ""
    productosList.forEach(({name, id, type, price, stock, description})=>{
        const prodCard = document.createElement("div")
        prodCard.classList.add("col-xs")
        prodCard.classList.add("card")
        prodCard.style = "width: 300px;height: 600px; margin:3px"
        prodCard.id = id
        prodCard.innerHTML = `
                <img src="../images/${name+id}.jpeg" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6>${type}</h6>
                    <p class="card-text">${description}</p>
                    <span>Stock: ${stock}</span>
                    <span>$ ${price}</span>
                    <form id="form${id}">
                        <label for="contador${id}">Cantidad</label>
                        <input type="number" placeholder="0" id="contador${id}">
                        <button class="btn btn-success" id="botonProd${id}">Agregar</button>
                    </form>
                </div>`
        contenedorProductos.appendChild(prodCard)
        const btn = document.getElementById(`botonProd${id}`)
        btn.addEventListener("click",(evento)=>{
            evento.preventDefault()
            const contadorQuantity = Number(document.getElementById(`contador${id}`).value)
            if(contadorQuantity>0){
                agregarCarrito({name, id, type, price, stock, description, quantity:contadorQuantity})
                renderizarCarrito()
                const form = document.getElementById(`form${id}`)
                form.reset()
            }
    })
    })
}

const productos = JSON.parse(localStorage.getItem("productos")) || [] 
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const pedidos = JSON.parse(localStorage.getItem("pedidos")) || []


const totalCarrito = ()=>{
    let total = carrito.reduce((acumulado, {price, quantity})=>{
        return acumulado + (price*quantity)
    }, 0)
    return total
}
const totalCarritoRender = ()=>{
    const carritoTotal = document.getElementById("carritoTotal")
    carritoTotal.innerHTML=`Precio total: $ ${totalCarrito()}`
}

const agregarCarrito = (productosCarrito)=>{
    carrito.push(productosCarrito)
    totalCarritoRender()
}



const renderizarCarrito = ()=>{
    const carritoList = document.getElementById("carritoList")
    carritoList.innerHTML=""
    carrito.forEach(({name, price, quantity, id}) =>{
        let elementoLista = document.createElement("li")
        elementoLista.innerHTML=`Producto: ${name} || Valor unitario: ${price} || Cantidad: ${quantity} <button id="eliminarCarrito${id}">X</button>`
        carritoList.appendChild(elementoLista)
        const botonBorrar = document.getElementById(`eliminarCarrito${id}`)
        botonBorrar.addEventListener("click",()=>{
            carrito = carrito.filter((elemento)=>{
                if(elemento.id !== id){
                    return elemento
                }
            })
            let carritoString = JSON.stringify(carrito)
            localStorage.setItem("carrito", carritoString)
            renderizarCarrito()
        })
        let carritoString = JSON.stringify(carrito)
        localStorage.setItem("carrito", carritoString)
    })
}

const borrarCarrito = ()=>{
    carrito.length = 0  
    let carritoString = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoString)
    renderizarCarrito()
}

const app = ()=>{
    productosPreexistentes()
    renderizarProductos(productos)
    renderizarCarrito()
    totalCarritoRender()
}

app()