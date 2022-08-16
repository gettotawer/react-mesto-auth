import logo from '../images/logo.png';
function Header(props){
    return(
        <header className="header">
            <img src={logo} alt="Логотип проекта 'Место'" className="header__logo"/>
        </header>
    );
}

export default Header;