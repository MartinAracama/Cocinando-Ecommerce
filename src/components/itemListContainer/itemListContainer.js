import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemCard } from "../ItemCard/itemCard";
import { useParams } from 'react-router-dom';
import { Spinner } from '../Spinner/spinner';
import "./itemListContainer.scss"


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()  
  console.log(categoryId)

 
  useEffect(() => {
      setLoading(true)
    pedirDatos()
      .then( (data) => {
          if (!categoryId) {
            setProductos(data)
          } else {
              setProductos( data.filter((prod) => prod.category === categoryId) )
          }
      })
      .catch((error) => {
          console.log(error)
      })
      .finally(() => {
        setLoading(false)
          
      })

  }, [categoryId])
  
    
  return (
      <div className='container'>
        {
          loading 
          ? <Spinner />
          : <ItemCard productos={productos}/>
        }
      </div>
  )
}

