import { useState } from 'react'
import { Contador } from "../Contador/Contador"
import { useCartContext } from '../../Context/CartContext'
import { Link } from "react-router-dom"
import "./itemDetail.scss"




export const ItemDetail = ( {producto} ) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const productoToCart = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad
        }
        
        addToCart(productoToCart)

          
    }
    
    return (
        <div className='containerDetail'>
            <div className='imgContainer'>
                <h4 className="titleDetail">{producto.nombre}</h4>
                <hr/>
                <img className="imgDetail" src={producto.img} alt={producto.nombre}/>
                <hr/>
            </div>
            <div className='cardContainerDetail'>
                 <p className="categoryDetail">Categoria: {producto.category}</p>
                 <p className='descripcionDetail'>Características: {producto.descripcion}</p>
                 <hr/>
                 
            </div>
            <div className='contador'>
                <hr/>
                <p className="precioDetail">Precio: $ {producto.precio}</p>

                {
                    isInCart(producto.id)
                    ?   <Link to="/cart" className="btn btn-success my-2">Terminar Compra</Link>
                    :   <Contador
                            max={producto.stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                            handleAgregar={handleAgregar}
                        />
                    
                }
                    <hr/>
                    <small className="stockDetail">Stock: {producto.stock}</small>
                    <hr/>
                    <div>

                    <img className='imgCounter' src="../img/utensillos1.png" alt="imagen utensillos"/>
                </div>
            </div>
            
        </div>
    )
}