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
          className="my-4 form-control"
          placeholder="Nombre y Apellido"
          />
          <input type={"email"}
          className="my-4 form-control"
          placeholder="Email"
          />
          <input type={"tel"}
          className="my-4 form-control"
          placeholder="Celular"
          />
          <input type={"textarea"}
          className="my-4 form-control"
          placeholder="Escriba sus comentarios"
          />
          <button className='btn btn-primary px-5' type="submit">Enviar</button>
        </form>
        
    </div>
  )
}
