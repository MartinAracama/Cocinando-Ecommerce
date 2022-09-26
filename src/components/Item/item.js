import React from 'react'
import { Link } from 'react-router-dom'
import { Boton } from '../Button/boton'
import "./item.scss"

export const Item = ( {producto} ) => {

  return (
            // AL CLIKEAR EN CUALQUIER LUGAR DE LA CARD SE ACCEDE AL DETALLE //
            <Link to={`/item/${producto.id}`} className='cardContainer'>
                  <img className='img' src={producto.img} alt={producto.nombre}/>
                  <h4 className='titulo'>{producto.nombre}</h4>
                  <p className='precio'>Precio: $ {producto.precio}</p>
                  <p className='categoria'>Categoria: {producto.category}</p>
                  <small className='stock'>Stock: {producto.stock}</small>
                <div className='boton'>
                  <Link to={`/item/${producto.id}`}><Boton/></Link>
                </div>
            </Link>
          )
}


