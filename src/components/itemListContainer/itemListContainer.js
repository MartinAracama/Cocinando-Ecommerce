import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemCard } from "../ItemCard/itemCard";
import "./itemListContainer.scss"


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  

  useEffect(() => {
    pedirDatos()
      .then((data) => {
          setProductos(data)
      })
      .catch((error) => {
          console.log(error)
      })
      .finally(() => {
          
      })

  }, [])
  
    
  return (
    <div className='row'>
      {
        productos.map(item => (
          <div className='col-3'>
            <ItemCard key={item.id} nombre={item.nombre} img={item.img} precio={item.precio} stock={item.stock} />
          </div>
        ))
      }
    </div>
  )
}

