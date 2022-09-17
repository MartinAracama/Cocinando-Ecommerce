import "./header.scss"
import { Link } from "react-router-dom"
import { Cart } from "../Cart/cart"


export const Header = () => {

    return (
        <header className="header">

            {/* <Link to="/" ><img src="../img/logo4.jpg" alt="logo cocinando"/></Link> */}
            <Link className="title" to="/">COCINANDO</Link>
            
            <nav className="navbar">
                <Cart/>
                            
                <Link to="/productos/sartenes" className="navbar-link">Sartenes</Link>
                <Link to="/productos/cuchillos" className="navbar-link">Cuchillos</Link>
                <Link to="/productos/cacerolas" className="navbar-link">Cacerolas</Link>
                <Link to="/nosotros" className="navbar-link">Nosotros</Link>
                <Link to="/contacto" className="navbar-link">Contacto</Link>
            </nav>

        </header>
    )
}