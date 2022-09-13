import React from 'react'
import { Contador } from "../Contador/Contador"
import "./itemDetail.scss"



export const ItemDetail = ( {producto} ) => {
    
    return (
        <div className='container'>
            <div className='imgContainer'>
                <h4 className="titulo">{producto.nombre}</h4>
                <hr/>
                <img className="img" src={producto.img}/>
                <hr/>
            </div>
            <div className='cardContainer'>
                 <p className="categoria">Categoria: {producto.category}</p>
                 <p className='descripcion'>Características: {producto.descripcion}</p>
            </div>
            <hr/>
            <div className='contador'>
                <hr/>
                <p className="precio">Precio: {producto.precio}</p>
                <Contador
                    max={producto.stock}
                    producto={producto} />
                    <hr/>
                <small className="stock">Stock: {producto.stock}</small>
            </div>
            
        </div>
    )
}