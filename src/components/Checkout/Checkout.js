import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from '../../Firebase/config'

export const Checkout = () => {

    const {cart, cartTotal, finalizarCompra} = useCartContext()

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        direccion: "",
    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e)   => {
        e.preventDefault()

    const orden = {
        comprador: values,
        items: cart,
        total: cartTotal()
    }
    
    if (values.nombre.length < 2) {
        alert("Nombre Incorrecto")
        return
    }
    
    if (values.email.length < 2) {
        alert("Email Incorrecto")
        return
    }
    
    const batch = writeBatch(db)
    const ordenesRef = collection(db, "ordenes")
    const productosRef = collection(db, "Data")

    const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

    const Data = await getDocs(q)

    const outOfStock = []

    Data.docs.forEach((doc) => {
         const itemInCart = cart.find(item => item.id === doc.id)

         if (doc.data().stock >= itemInCart.cantidad) {
             batch.update(doc.ref, {
                 stock: doc.data().stock - itemInCart.cantidad
             })
         } else {
             outOfStock.push(itemInCart)
         }
     })

     if (outOfStock.length === 0) {
         batch.commit()
              .then(() => {
                 addDoc(ordenesRef, orden)
                     .then((doc) => {
                         console.log(doc.id)
                         finalizarCompra(doc.id)
                     })
              })
     } else {
         alert("Hay items sin sotock")
         console.log(outOfStock)
     }
}


    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className='container'>

            <h2>Checkout</h2>
        

            <form onSubmit={handleSubmit}>
                <input
                name='nombre'
                value={values.nombre}
                onChange={handleInputChange}
                type={"text"} 
                className="my-3 form-control" 
                placeholder='Tu nombre'
                />

                <input
                name='email'
                value={values.email} 
                onChange={handleInputChange}
                type={"email"} 
                className="my-3 form-control" 
                placeholder='Email'
                />

                <input 
                name='direccion'
                value={values.direccion}
                onChange={handleInputChange}
                type={"text"} 
                className="my-3 form-control" 
                placeholder='Direccion'
                />

                <button type='submit' className='btn btn-primary'>Enviar</button>
            </form>

    </div>
  )
}

