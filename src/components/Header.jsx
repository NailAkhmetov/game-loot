import { Link } from "react-router-dom";
import logo from "../assets/images/home/logo.svg";
import { MARKET } from "../utils/const";


function Header() {

    return (
        <header className="header-pl">
            <div className="container header-flex-pl">
                    <img src={logo} alt="Logo-hi"/>
                    <nav className="header-nav">
                    <Link to={MARKET} className="header-nav__link" href="#">Маркет</Link>
                    <a className="header-nav__link" href="#">Обмен</a>
                    <a className="header-nav__link" href="#">Фильтры</a>
                    <a className="header-nav__link" href="#">Кейсы</a>
                    <a className="header-nav__link" href="#">Подключить Steam</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;