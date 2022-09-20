import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const CartWidget = () => {

  const { cartQ } = useContext(CartContext)

  return (
    <Link to="/cart">
        <FaShoppingCart style={{color: "#902", fontSize: "40px"}} />
        <span>{cartQ()}</span>
    </Link>
  )
}

