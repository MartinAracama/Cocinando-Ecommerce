import { useCartContext } from '../../Context/CartContext'
import { BsFillTrashFill } from "react-icons/bs"
import "./cart.scss"
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { cart, cartTotal, vaciarCarrito, eliminarProducto } = useCartContext()
    
    return (
        <div className='cartContainer'>
            <h2 className='cartTitulo'>Carrito</h2>
            <hr className='hr'/>

            { cart.map((producto) => (
                <div className='cartDetalle' key={producto.id}>
                    <h3 className='cartProducto'>{producto.nombre}</h3>
                    <p className='cartPrecio'>Precio: $ {producto.precio}.-</p>
                    <p className='cartCantidad'>Cantidad: {producto.cantidad}</p>
                    <button onClick={() => eliminarProducto(producto.id)} className='btn btn-danger mx-2'><BsFillTrashFill/></button>        
                    <hr className='hr'/>
                </div>
            ))}
            <hr className='hr'/>
            <h4 className='cartTotal'>Total: $ {cartTotal()}.-</h4>
            <button onClick={vaciarCarrito} className='btn btn-danger mx-2'>Vaciar Carrito</button>
            <hr/>
            <Link className='btn btn-success mx-2' to="/checkout">Terminar mi compra</Link>
        </div>
  )
}

