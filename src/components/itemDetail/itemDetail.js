import React from 'react'
// import { Contador } from "../Contador/Contador"



export const ItemDetail = ( {producto} ) => {
    
    return (
        <div className='container'>
            <img className="img" src={producto.img}/>
            <h4 className="titulo">{producto.nombre}</h4>
            <p className="precio">{producto.precio}</p>
            <p className="catagoria">Categoria:{producto.category}</p>
            <p className='descripcion'>{producto.descripcion}</p>
            <small className="stock">{producto.stock}</small>
            <hr/>

            {/* <Contador
                max={producto.stock}
                producto={producto}
            /> */}
            
        </div>
    )
}