import { productos } from "../data/data"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
         resolve(productos)
      }, 1000)
    })
}


     // setTimeout(() => {
     //     if (param) {
     //     resolve("Promesa Resuelta")
     //     } else {
     //     reject("Promesa Rechazada")
     // },  3000)