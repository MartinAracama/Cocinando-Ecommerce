import "./contacto.scss"

export const Contacto = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <div className='contenedor'>
        <h2 className='titulo'>Contacto</h2>
        

        <form onSubmit={handleSubmit}
        className="formulario">
          <input 
          type={"text"} 
          className="form control my-2"
          placeholder="Nombre y Apellido"
          />
          <input type={"email"}
          className="form control my-2"
          placeholder="Email"
          />
          <input type={"tel"}
          className="form control my-2"
          placeholder="Celular"
          />
          <button className='btn btn-primary px-5' type="submit">Enviar</button>
        </form>
        
    </div>
  )
}
