// import style from "./Navbar.module.css";
import StyledNavbar from "./StyledNavbar";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        <StyledNavbar>
            <nav className="navbar">
                <div className="container__menu">
                    <div>
                        <h1 className="navbar__title">Covid ID</h1>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar__menu">                    
                    <ul className="navbar__list">
                        <li className="navbar__item"><Link to="/">Home</Link></li>
                        <li className="navbar__item"><Link to="/indonesia">Indonesia</Link></li>
                        <li className="navbar__item"><Link to="/provinsi">Provinsi</Link></li>
                        <li className="navbar__item"><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </StyledNavbar>
    );
}

export default Navbar;