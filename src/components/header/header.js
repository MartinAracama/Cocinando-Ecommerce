import "./header.scss"
import { Link } from "react-router-dom"


export const Header = () => {

    return (
        <header className="header">
            
            <h1 className="title">COCINANDO</h1>
            
            <nav className="navbar">
                
                <img className="cart" src="CartLogo.png" alt="carrito de compras"/>
            
                <Link to="/" className="navbar-link">Inicio</Link>
                <Link to="/categorias" className="navbar-link">Categorias</Link>
                <Link to="/ofertas" className="navbar-link">Ofertas</Link>
                <Link to="/nosotros" className="navbar-link">Nosotros</Link>
                <Link to="/contacto" className="navbar-link">Contacto</Link>
            </nav>

        </header>
    )
}