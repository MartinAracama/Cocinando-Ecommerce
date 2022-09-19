import React from 'react'
import { Contador } from "../Contador/Contador"
import { useState } from 'react'
import "./itemDetail.scss"



export const ItemDetail = ( {producto} ) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const productoToCart = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad
        }
        console.log(productoToCart)

        // console.log({...producto, cantidad})
  
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
                 
            </div>
            <hr/>
            <div className='contador'>
                <hr/>
                <p className="precioDetail">Precio: $ {producto.precio}</p>
                <Contador
                    max={producto.stock}
                    counter={cantidad}
                    setCounter={setCantidad}
                    handleAgregar={handleAgregar}
                    />
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