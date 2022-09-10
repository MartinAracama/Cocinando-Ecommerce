import React from 'react'
import { Item } from '../Item/item'
import "./itemCard.scss"

export const ItemCard = ( {productos = []} ) => {

    return (

    
        <div className='itemContainer'>
            
            { productos.map((item) => <Item producto={item} key={item.id}/>)}
            
        </div>

    )
}
            

            