import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase/config"

export const useProductos = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()  
  

 
  useEffect(() => {
      setLoading(true)

      const productosRef = collection(db, "Data")

      const q = categoryId
                ? query(productosRef, where("category", "==", categoryId) )
                : productosRef

      getDocs(q)
          .then((snapshot) => {
            const productosDB = snapshot.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
             console.log(productosDB)
  
             setProductos(productosDB)
          })
          .finally(() => {
            setLoading(false)
          })
  }, [categoryId])

    return ({
        productos, loading
    })
}
