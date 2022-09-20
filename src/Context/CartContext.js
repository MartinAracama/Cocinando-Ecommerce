import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext()


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
        setCart([])
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