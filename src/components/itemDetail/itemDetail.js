import React from 'react'
import { Contador } from "../Contador/Contador"



export const ItemDetail = ( {producto } ) => {

    return (
        <div className='container my-5'>
            <img src={producto.img}/>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <h4>{producto.precio}</h4>
            <hr/>

            <Contador
                max={producto.stock}
                producto={producto}
            />
            
        </div>
    )
}