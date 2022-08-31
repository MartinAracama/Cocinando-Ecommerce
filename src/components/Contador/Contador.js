import React from 'react'
import { Button } from "reactstrap"
import { useState } from 'react'
import "./Contador.scss"


export const Contador = ({stock}) => {

    const [counter, setCounter] = useState(0)

    
    const handleSumar = () => {
      if(counter < stock)
      setCounter( counter + 1 )
    }
    
    const handleRestar = () => {
      if (counter > 0) {
        setCounter( counter - 1 )
      }
    }
    

  return (
    <div>
      <div className="counter">
        <Button onClick={handleRestar}> - </Button>
        <span className='numero'> {counter} </span>
        <Button onClick={handleSumar}> + </Button>
      </div>
        <Button style={{width: "100%", marginTop: "1rem"}}> Agregar al Carrito </Button>
    </div>
  )
}

