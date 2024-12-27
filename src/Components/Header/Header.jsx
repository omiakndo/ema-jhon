
import './Header.css'
import logo from '../../images/Logo.svg';


const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="" />
           <div className='nav-item'>
            <a href="/shop">SHOP</a>
            <a href="/inventry">INVEMTORY</a>
            <a href="/order">ORDER</a>
            <a href="/login">LOGIN</a>
           </div>
         
        </nav>
    );
};

export default Header;