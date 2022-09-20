
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemDetail } from "../itemDetail/itemDetail"
import { Spinner } from '../Spinner/spinner';



export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)

  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true)

    pedirDatos()
        .then((data) => {
            setProducto( data.find((prod) => prod.id === Number(itemId)))
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false)
        })


  }, [itemId])
  
    
  return (
    // producto &&
      <div>
        {
            loading
            ? <Spinner />
            : <ItemDetail producto={producto}/>
        }
      </div>
  )
}