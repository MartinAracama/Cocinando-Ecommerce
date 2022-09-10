
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemDetail } from "../itemDetail/itemDetail"



export const ItemDetailContainer = () => {

  const [productos, setProductos] = useState(null)
  const [loading, setLoading] = useState(true)

  const {itemId} = useParams

  console.log(itemId)
  console.log(productos)

 
  useEffect(() => {
    setLoading(true)

    pedirDatos()
        .then((data) => {
            setProductos( data.find((prod) => prod.id === Number(itemId)))
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false)
        })


  }, [])
  
    
  return (
      <div>
        {
            loading
            ? <h2>Cargando...</h2>
            : <ItemDetail productos={productos}/>
        }
        

        

      </div>
  )
}