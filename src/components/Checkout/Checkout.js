import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
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

    const handleSubmit = (e)   => {
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
    
    const ordenesRef = collection(db, "ordenes")

    cart.forEach((item) => {
        const docRef = doc(db, "Data", item.id)

        getDoc(docRef)
            .then((doc) => {

                if (doc.data().stock <= item.cantidad) {

                    updateDoc(docRef, {
                        stock: doc.data().stock - item.cantidad 
                }) 
                } else {
                alert("No hay stock sufciente")
                }
        })
                
    })
    
        addDoc(ordenesRef, orden)
            .then((doc) => {
            console.log(doc.id)
            finalizarCompra(doc.id)

        })
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

