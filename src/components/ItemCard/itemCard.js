import React from 'react'
import { Item } from '../Item/item'
import "./itemCard.scss"

export const ItemCard = ( {productos = []} ) => {

    // const {nombre, descripcion, img, precio, stock} = props;
    return (
        <div className='container my-5'>
            <h2>Productos</h2>
            <hr/>

            { productos.map((item) => <Item producto={item} key={item.id}/>)}
        </div>
    )
}
            

            