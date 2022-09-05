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
      <div className='container'>
        <ItemCard productos={productos}/>
      </div>
  )
}

