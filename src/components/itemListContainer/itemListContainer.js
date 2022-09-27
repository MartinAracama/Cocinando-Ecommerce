import "./itemListContainer.scss"
import { useEffect, useState } from 'react';
// import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemCard } from "../ItemCard/itemCard";
import { useParams } from 'react-router-dom';
import { Spinner } from '../Spinner/spinner';
import { db } from "../../Firebase/config"
import { collection, getDocs } from "firebase/firestore";


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()  
  

 
  useEffect(() => {
      setLoading(true)

      const productosRef = collection(db, "Data")

      getDocs(productosRef)
        .then((snapshot) => {
          const productosDB = snapshot.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
           console.log(productosDB)

           setProductos(productosDB)
        })
        .finally(() => {
          setLoading(false)
        })

        
  }, [categoryId])

      // pedirDatos()
      //   .then( (data) => {
      //       if (!categoryId) {
      //         setProductos(data)
      //       } else {
      //           setProductos( data.filter((prod) => prod.category === categoryId) )
      //       }
      //   })
      //   .catch((error) => {
      //       console.log(error)
      //   })
      //   .finally(() => {
      //     setLoading(false)
            
      //   })
  
    
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

