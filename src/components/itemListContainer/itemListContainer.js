import React, { useEffect, useState } from 'react';
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
          // console.log("Fin del proceso")
      })

  }, [])
  

  

  // const array = [
  //   <ItemCard nombre="Sartén Efficient Orange 24cm" descripcion="Fabricada en aluminio fundido extremadamente resistente a la deformación (6mm de espesor en la base). Revestimiento antiadherente Teflón Platinum Plus de alta calidad y muy duradero. 100% libre de PFOA. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Mango ergonómico con el característico color naranja de BRA." img="./img/sarten_efficient_Orange_24cm.jpg" precio="$ 13.627.-" stock="6"/> 
  // ]

  // console.log(productos.map( (item) => {
  //       return item.nombre
  // }) )

  return (
    <div className='row'>
      {
        productos.map(item => (
          <div className='col-3'>
            <ItemCard key={item.id} nombre={item.nombre} img={item.img} precio={item.precio} stock={item.stock} />
          </div>
        ))
      }

      {/* { productos.map((item) => {
          return <div key={item.id}>
            <img src={item.img}/>
            <h4>{item.nombre}</h4>
            <p>Precio: {item.precio}</p>
            <small>Stock: {item.stock}</small>
            <p>{item.descripcion}</p>
          </div>
      }) } */}
    </div>
  )
}

