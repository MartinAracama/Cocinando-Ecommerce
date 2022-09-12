import React from 'react'
// import { Contador } from "../Contador/Contador"



export const ItemDetail = ( {producto} ) => {
    
    return (
        <div className='container'>

            <img src={producto.img}/>
            <h3>{producto.nombre}</h3>
            <h4>{producto.precio}</h4>
            <p>{producto.category}</p>
            <p>{producto.descripcion}</p>
            <p>{producto.stock}</p>
            <hr/>

            {/* <Contador
                max={producto.stock}
                producto={producto}
            /> */}
            
        </div>
    )
}