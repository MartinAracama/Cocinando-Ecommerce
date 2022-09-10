import "./header.scss"
import { Link } from "react-router-dom"


export const Header = () => {

    return (
        <header className="header">
            
            <Link to="/"><h1 className="title">COCINANDO</h1></Link>
            
            <nav className="navbar">
                
                <img className="cart" src="CartLogo.png" alt="carrito de compras"/>
            
                <Link to="/productos/sartenes" className="navbar-link">Sartenes</Link>
                <Link to="/productos/cuchillos" className="navbar-link">Cuchillos</Link>
                <Link to="/productos/ollas" className="navbar-link">Ollas</Link>
                <Link to="/nosotros" className="navbar-link">Nosotros</Link>
                <Link to="/contacto" className="navbar-link">Contacto</Link>
            </nav>

        </header>
    )
}