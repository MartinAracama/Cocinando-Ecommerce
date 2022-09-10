import React from 'react'
// import { Contador } from "../Contador/Contador"



export const ItemDetail = ( {productos} ) => {

    return (
        <div className='container'>
            <img src={productos.img}/>
            <h3>{productos.nombre}</h3>
            <h4>{productos.precio}</h4>
            <p>{productos.category}</p>
            <p>{productos.descripcion}</p>
            <p>{productos.stock}</p>
            <hr/>

            {/* <Contador
                max={producto.stock}
                producto={producto}
            /> */}
            
        </div>
    )
}