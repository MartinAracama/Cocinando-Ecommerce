import React from 'react'
import { Link } from 'react-router-dom'
import "./item.scss"

export const Item = ( {producto} ) => {

  return (
        <div className='container'>
            <div className='cardContainer'>
                <img className='img' src={producto.img}/>
                <h4 className='titulo'>{producto.nombre}</h4>
                <p className='precio'>Precio: {producto.precio}</p>
                <p className='categoria'>Categoria: {producto.category}</p>
                <small className='stock'>Stock: {producto.stock}</small>
                {/* <p className='descripcion'>{producto.descripcion}</p> */}
                <Link to={`/item/${producto.id}`} className="btn btn-primary my-3">Ver Detalle</Link>
            </div>
        </div>
      )
}


