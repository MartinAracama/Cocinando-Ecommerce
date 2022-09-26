import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import "./cartWidget.scss"

export const CartWidget = () => {

  const { cartQ } = useContext(CartContext)

  return (
    <Link to="/cart" className='cartLogo'>
      <div className='cart'>
        <FaShoppingCart style={{color: "#c9910e", fontSize: "40px"}} />
        <span className='cartQ'>{cartQ()}</span>
      </div>
    </Link>
  )
}

