import "./header.scss"
import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/cartWidget"


export const Header = () => {

    return (
        <header className="header">

            <div className="logo">
            <Link to="/" ><img className="imgHeader" src="./img/logo_cooking.png" alt="logo cocinando"/></Link>
            </div>

            <nav className="navbar">
                            
                <Link to="/productos/sartenes" className="navbar-link">Sartenes</Link>
                <Link to="/productos/cuchillos" className="navbar-link">Cuchillos</Link>
                <Link to="/productos/cacerolas" className="navbar-link">Cacerolas</Link>
                <Link to="/contacto" className="navbar-link">Contacto</Link>
            </nav>
                <CartWidget/>

        </header>
    )
}