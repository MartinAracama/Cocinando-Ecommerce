import React from 'react'
import { Button } from "reactstrap"
import "./Contador.scss"


export const Contador = ({max, counter, setCounter, handleAgregar}) => {

  const handleRestar = () => {
      if (counter > 1) {
        setCounter( counter - 1 )
      }
    }
    
    const handleSumar = () => {
      if(counter < max) {
        setCounter( counter + 1 )
      }
    }


  return (
    <div>
      <div className="counter">
        <Button onClick={handleRestar}> - </Button>
        <span className='numero'> {counter} </span>
        <Button onClick={handleSumar}> + </Button>
      </div>
        <Button onClick={handleAgregar} style={{width: "100%", marginTop: "1rem"}}> Agregar al Carrito </Button>
    </div>
  )
}

