import React from 'react'
import { Button } from "reactstrap"
import { useState } from 'react'


export const Contador = ({stock}) => {

    const [counter, setCounter] = useState(0)

    
    const handleSumar = () => {
      if(Contador < stock)
      setCounter( counter + 1 )
    }
    
    const handleRestar = () => {
      if (counter > 0) {
        setCounter( counter - 1 )
      }
    }
    

  return (
    <div>
        <Button onClick={handleRestar}> - </Button>
        <span> {counter} </span>
        <Button onClick={handleSumar}> + </Button>
        <Button style={{width: "100%", marginTop: "1rem"}}> Agregar al Carrito </Button>
    </div>
  )
}

