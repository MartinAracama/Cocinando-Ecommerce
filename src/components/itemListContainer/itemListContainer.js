import React from 'react'
import { ItemCard } from "../itemCard.js"


export const ItemListContainer = () => {

  const productos = [
    {
      id: 1,
      nombre: "Sartén Efficient 30cm",
      descripcion: "Fabricada en aluminio fundido extremadamente resistente a la deformación (6mm de espesor en la base). Revestimiento antiadherente Teflón Platinum Plus de alta calidad y muy duradero. 100% libre de PFOA. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Mango ergonómico en color negro con logo de BRA en naranja",
      img: "./img/sarten_eficient_30cm.jpg",
      precio: "$ 19.937.-",
      stock: 10
    },
    {
      id: 2,
      nombre: "Sartén Smeg Antiadherente 26cm",
      descripcion: "Fabricada en aluminio forjado en frío.Revestimiento antiadherente resistente a la abrasión. Mango de acero inoxidable frío.Base de acero de 4, 5mm.Excelente distribución del calor.",
      img: "./img/sarten_smeg_antiadherente_26cm.jpg",
      precio: "$ 13.401.-",
      stock: 8
    },
    {
      id: 3,
      nombre: "Sartén Dupla Prior 24cm",
      descripcion: "Fabricada en aluminio fundido muy resistente a la deformación (5,5mm de espesor en la base). Revestimiento antiadherente Teflón Classic 100% libre de PFOA. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Mango ergonómico para un agarre agradable y seguro. Cocina asado con efecto horno.",
      img: "./img/sarten_dupla_prior_cerrada_24.jpg",
      precio: "$ 23.675.-",
      stock: 5
    },
    {
      id: 4,
      nombre: "Sartén Signature Pro. 30cm",
      descripcion: "Fabricada en acero inoxidable 18/10 con triple fondo difusor para un reparto excelente de la temperatura. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Mango ergonómico profesional fabricado también en acero inoxidable. Apta para lavavajillas.",
      img: "./img/sarten_signature_30cm.jpg",
      precio: "$ 21.145.-",
      stock: 5
    },
    {
      id: 5,
      nombre: "Sartén Market Desmontable 28cm",
      descripcion: "Fabricada en aluminio fundido extremadamente resistente a la deformación (6mm de espesor en la base). Revestimiento antiadherente Teflon Profile de alta calidad, muy duradero y ultra resistente al rayado. 100% libre de PFOA. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Fácil de desmontar. Mango de gran rigidez y fiabilidad. Madera fumigada y tratada con pintura de retraso de la llama y pintura transparente para su mejor conservación. Aptas para el lavavajillas sin el mango de madera. Apta para horno hasta 220º C sin el mango.",
      img: "./img/sarten_market_desmontable_28cm.jpg",
      precio: "$ 23.654.-",
      stock: 10
    },
    {
      id: 6,
      nombre: "Sartén Signature Pro. 20cm",
      descripcion: "Fabricada en acero inoxidable 18/10 con triple fondo difusor para un reparto excelente de la temperatura. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Mango ergonómico profesional fabricado también en acero inoxidable. Apta para lavavajillas.",
      img: "./img/sarten_signature_20cm.jpg",
      precio: "$ 13.306.-",
      stock: 4
    },
    {
      id: 7,
      nombre: "Sartén Hondo Efficient 28cm",
      descripcion: "Fabricada en aluminio fundido extremadamente resistente a la deformación (6mm de espesor en la base). Revestimiento antiadherente Teflón Platinum Plus de alta calidad y muy duradero. 100% libre de PFOA. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Mango ergonómico en color negro con logo de BRA en naranja.",
      img: "./img/sarten_hondo_efficient_28cm.jpg",
      precio: "$ 18.126.-",
      stock: 4
    },
    {
      id: 8,
      nombre: "Sartén Efficient Orange 24cm",
      descripcion: "Fabricada en aluminio fundido extremadamente resistente a la deformación (6mm de espesor en la base). Revestimiento antiadherente Teflón Platinum Plus de alta calidad y muy duradero. 100% libre de PFOA. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Mango ergonómico con el característico color naranja de BRA.",
      img: "./img/sarten_efficient_Orange_24cm.jpg",
      precio: "$ 13.627.-",
      stock: 6
    }
  ]

  const array = [
    <ItemCard nombre="Sartén Efficient Orange 24cm" descripcion="Fabricada en aluminio fundido extremadamente resistente a la deformación (6mm de espesor en la base). Revestimiento antiadherente Teflón Platinum Plus de alta calidad y muy duradero. 100% libre de PFOA. Fondo full induction compatible con todas las fuentes de calor incluida la inducción. Mango ergonómico con el característico color naranja de BRA." img="./img/sarten_efficient_Orange_24cm.jpg" precio="$ 13.627.-" stock="6"/> 
  ]

  return (
    <div className='row'>
      {
        productos.map(item => (
          <div className='col-4'>
            <ItemCard key={item.id} nombre={item.nombre} descripcion={item.descripcion} img={item.img} precio={item.precio} stock={item.stock} />
          </div>
        ))
      }
    </div>
  )
}

