import React from 'react'
import { Contador } from "../Contador/Contador"
import "./itemDetail.scss"



export const ItemDetail = ( {producto} ) => {
    
    return (
        <div className='containerDetail'>
            <div className='imgContainer'>
                <h4 className="titleDetail">{producto.nombre}</h4>
                <hr/>
                <img className="imgDetail" src={producto.img}/>
                <hr/>
            </div>
            <div className='cardContainerDetail'>
                 <p className="categoryDetail">Categoria: {producto.category}</p>
                 <p className='descripcionDetail'>Características: {producto.descripcion}</p>
            </div>
            <hr/>
            <div className='contador'>
                <hr/>
                <p className="precioDetail">Precio: {producto.precio}</p>
                <Contador
                    max={producto.stock}
                    producto={producto} />
                    <hr/>
                <small className="stockDetail">Stock: {producto.stock}</small>
            </div>
            
        </div>
    )
}