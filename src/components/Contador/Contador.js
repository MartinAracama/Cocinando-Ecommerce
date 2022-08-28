import React from 'react'
import { useState } from 'react'
import "./Contador.scss"



const Contador = ({max}) => {

    const [counter, setCounter] = useState(0)

    
    const handleSumar = () => {
      setCounter( counter + 1 )
    }

    const handleRestar = () => {
        if (counter > 0) {
        setCounter( counter - 1 )
        }
    }


  return (
    <div className='counterContainer'>
        <h2 className='titulo'>Contador</h2>
        <button onClick={handleSumar} className='botonMas'> + </button>
        <span className='numero'> {counter} </span>    
        <button onClick={handleRestar} className='botonMenos'> - </button>
    </div>
  )
}

export default Contador