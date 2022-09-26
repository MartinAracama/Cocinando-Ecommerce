import { createContext, useContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

export const useCartContext = () => {
  return useContext(CartContext)
}

export const CartCustomProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (producto) => {
      setCart([...cart, producto])
    }

    const eliminarProducto = (id) => {
        setCart( cart.filter((producto) => producto.id !== id) )
    }
  
    const isInCart = (id) => {
      return cart.some((producto) => producto.id === id )
    }
  
    const cartQ = () => {
      return cart.reduce((acc, producto) => acc + producto.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
    }

    const vaciarCarrito = () => {

        Swal.fire({
            title: 'Está seguro que quiere vaciar el carrito?',
            text: "Está acción no se podrá revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar el carrito!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    return (
        <CartContext.Provider value={ {
            cart,
            addToCart,
            isInCart,
            cartQ,
            cartTotal,
            vaciarCarrito,
            eliminarProducto
        }}> 
            {children}
        </CartContext.Provider>
    )
}

