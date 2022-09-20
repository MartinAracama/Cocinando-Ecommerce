import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { BsFillTrashFill } from "react-icons/bs"

export const Cart = () => {

    const { cart, cartTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext)
    
    return (
        <div className='container my-5'>
            <h2>Carrito</h2>
            <hr/>

            { cart.map((producto) => (
            <div key={producto.id}>
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <p>{producto.cantidad}</p>
                <button onClick={() => eliminarProducto(producto.id)} className='btn btn-danger mx-2'><BsFillTrashFill/></button>        
        
                <hr/>
            </div>
        ))}

        <h4>Total: ${cartTotal()}</h4>
        <button onClick={vaciarCarrito} className='btn btn-danger'>Vaciar Carrito</button>
    </div>
  )
}

