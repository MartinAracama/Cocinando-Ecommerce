import "./header.scss"
import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/cartWidget"


export const Header = () => {

    return (
        <header className="header">

            <Link to="/" ><img className="imgHeader" src="./img/Recurso_1.png" alt="logo cocinando"/></Link>
            
            
            <nav className="navbar">
                <CartWidget/>
                            
                <Link to="/productos/sartenes" className="navbar-link">Sartenes</Link>
                <Link to="/productos/cuchillos" className="navbar-link">Cuchillos</Link>
                <Link to="/productos/cacerolas" className="navbar-link">Cacerolas</Link>
                <Link to="/nosotros" className="navbar-link">Nosotros</Link>
                <Link to="/contacto" className="navbar-link">Contacto</Link>
            </nav>

        </header>
    )
}