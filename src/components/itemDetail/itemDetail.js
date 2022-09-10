import React from 'react'
// import { Contador } from "../Contador/Contador"



export const ItemDetail = ( {item} ) => {

    return (
        <div className='container'>
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
            <hr/>

            {/* <Contador
                max={producto.stock}
                producto={producto}
            /> */}
            
        </div>
    )
}