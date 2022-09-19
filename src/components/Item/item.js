import React from 'react'
import { Link } from 'react-router-dom'
import { Boton } from '../Button/boton'
import "./item.scss"

export const Item = ( {producto} ) => {

  return (
        // <div className='container'>
            <div className='cardContainer'>
                <img className='img' src={producto.img} alt={producto.nombre}/>
                <h4 className='titulo'>{producto.nombre}</h4>
                <p className='precio'>Precio: $ {producto.precio}</p>
                <p className='categoria'>Categoria: {producto.category}</p>
                <small className='stock'>Stock: {producto.stock}</small>
                <div className='boton'>
                <Link to={`/item/${producto.id}`}><Boton/></Link>
                </div>

                {/* <Link to={`/item/${producto.id}`} className="btn btn-outline-primary m-3" >Ver Detalle</Link> */}
            </div>
        // </div>
      )
}


