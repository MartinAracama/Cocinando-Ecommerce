
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from "../itemDetail/itemDetail"
import { Spinner } from '../Spinner/spinner';
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../Firebase/config';



export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)

  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, "Data", itemId)

    getDoc(docRef)
      .then((doc) => {
        setProducto({id: doc.id, ...doc.data()})
      })
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