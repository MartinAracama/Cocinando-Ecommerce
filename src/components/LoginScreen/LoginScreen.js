import React from 'react'
import { useContext, useState } from 'react'
import { LoginContext } from '../../Context/LoginContext'




export const LoginScreen = () => {

    const {login, user} = useContext(LoginContext)
    console.log(user)

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)    
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        login({
            email,pass
        })
    }
  
    return (
        <div style={{backgroundColor: "#c9910e", margin: "5px", borderRadius: "5px",}}>
            <form onSubmit={handleSubmit} className='container py-4'>
                <input 
                    type={"email"} 
                    className="form-control" 
                    value={email}
                    onChange={handleEmailChange}
                />
                <input 
                    type={"password"} 
                    className="form-control"
                    value={pass}
                    onChange={handlePassChange}
                />
            <button className='btn btn-primary' type='submit'>Ingrese</button>
            </form>
            
        </div>
  ) 
}

