import "./header.scss"


export const Header = () => {

    return (
        <header className="header">
            <h1 className="title">COCINANDO</h1>
            <nav className="navbar">
                
                <img className="cart" src="CartLogo.png" alt="carrito de compras"/>
            
                <a className="navbar-link">Inicio</a>
                <a className="navbar-link">Categorias</a>
                <a className="navbar-link">Ofertas</a>
                <a className="navbar-link">Quienes Somos</a>
                <a className="navbar-link">Contacto</a>
            </nav>
        </header>
    )
}