import "./footer.scss"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare   } from "react-icons/fa";


export const Footer = () => {

    return (
        <footer className="footer">
            <div className="data">
            <p className="texto">Todos los derechos reservados</p>
            </div>

            <div>
                <FaFacebookSquare style={{fontSize: "30px", color: "#c9910e"}}/>
                <FaInstagramSquare style={{fontSize: "30px", color: "#c9910e"}}/>
                <FaTwitterSquare style={{fontSize: "30px", color: "#c9910e"}}/>
                
            </div>
        </footer>
    )
}