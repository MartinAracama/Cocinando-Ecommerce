import "./footer.scss"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare   } from "react-icons/fa";


export const Footer = () => {

    return (
        <footer className="footer">
            <div className="data">
            <p className="texto">Todos los derechos reservados</p>
            </div>

            <div>
                <FaFacebookSquare style={{fontSize: "30px", color: "#902"}}/>
                <FaInstagramSquare style={{fontSize: "30px", color: "#902"}}/>
                <FaTwitterSquare style={{fontSize: "30px", color: "#902"}}/>
                
            </div>
        </footer>
    )
}