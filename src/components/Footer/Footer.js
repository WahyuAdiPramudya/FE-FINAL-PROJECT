import {Link} from "react-router-dom";
import StyledFooter from "./StyledFooter";

function Footer() {
    return (
        <StyledFooter>
            <footer className="footer">
                <div className="footer__left">
                    <h2 className="footer__title">COVID ID App</h2>
                    <p className="footer__author">&copy; Created by Wahyu</p>
                </div>
                <div className="footer__right">            
                    <ul className="footer__list">
                        <li className="footer__item"><Link to="/">Home</Link></li>
                        <li className="footer__item"><Link to="/indonesia">Indonesia</Link></li>
                        <li className="footer__item"><Link to="/provinsi">Provinsi</Link></li>
                        <li className="footer__item"><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </footer>
        </StyledFooter>  
    );
}

export default Footer;