import React from 'react'
import { Item } from '../Item/item'
import "./itemCard.scss"

export const ItemCard = ( {productos = []} ) => {

    return (

    // const {nombre, descripcion, img, precio, stock} = props;
        <div className='itemContainer'>
            {/* <h2>Productos</h2>
            <hr/> */}

            { productos.map((item) => <Item producto={item} key={item.id}/>)}
        </div>

    )
}
            

            