import React from 'react'
import "./item.scss"

export const Item = ( {producto} ) => {

  return (
        <div className='container'>
            <div className='cardContainer'>
                <img className='img' src={producto.img}/>
                <h4 className='titulo'>{producto.nombre}</h4>
                <p className='precio'>Precio: {producto.precio}</p>
                <small className='stock'>Stock: {producto.stock}</small>
                {/* <p className='descripcion'>{producto.descripcion}</p> */}
                <a className="btn btn-primary my-3">Ver Detalle</a>
            </div>
        </div>
      )
}


