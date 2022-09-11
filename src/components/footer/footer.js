import "./footer.scss"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
export const Footer = () => {

    return (
        <footer className="footer">
            <div className="data">
            <p className="texto">Todos los derechos reservados</p>
            </div>
            
            <div className="iconos">
                <FaFacebookSquare/>
                <FaInstagramSquare/>
                <FaTwitterSquare/>
            </div>
        </footer>
    )
}