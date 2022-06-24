import style from "./Navbar.module.css";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        <div className={style.container}>
            <nav className={style.navbar}>
                <div>
                    <h1 className={style.navbar__title}>Covid ID</h1>
                </div>
                <div>                    
                    <ul className={style.navbar__list}>
                        <li className={style.navbar__item}><Link to="/">Home</Link></li>
                        <li className={style.navbar__item}><Link to="/indonesia">Indonesia</Link></li>
                        <li className={style.navbar__item}><Link to="/provinsi">Provinsi</Link></li>
                        <li className={style.navbar__item}><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;