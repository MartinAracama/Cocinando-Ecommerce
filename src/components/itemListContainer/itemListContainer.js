import "./itemListContainer.scss"
import { ItemCard } from "../ItemCard/itemCard";
import { Spinner } from '../Spinner/spinner';
import { useProductos } from "../Hooks/useProductos";


export const ItemListContainer = () => {

  const { productos, loading} = useProductos()

  return (
      <div className='container'>
              {
                  loading 
                  ? <Spinner />
                  : <ItemCard productos={productos}/>
              }
            </div>
  )
}

