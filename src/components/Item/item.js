import React from 'react'

export const Item = ( {producto} ) => {

  return (
    <div>
        <div>
            <img src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <small>Stock: {producto.stock}</small>
            <p>{producto.descripcion}</p>
            <a className="btn btn-primary my-2">Ver Detalle</a>
        </div>
    </div>
  )
}


