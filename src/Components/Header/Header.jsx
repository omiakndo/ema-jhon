
import './Header.css'
import logo from '../../images/Logo.svg';


const Header = () => {
    return (
        // <nav className="header">
        //     <img src={logo} alt="" />
            
        //    <div className='nav-item'>
        //     <a href="/">SHOP</a>
        //     <a href="/order">ORDERS</a>
        //     <a href="/inventry">INVEMTORY</a>
           
        //     <a href="/login">LOGIN</a>
        //    </div>
         
        // </nav>
        <div className="cc  h-16 flex  items-center justify-between   bg-slate-800">
            <img className='ms-14' src={logo} alt="" />

           <nav className=' text-red-600 me-14  font-bold '>
            <a className='ms-8' href="/">SHOP</a>
            <a className='ms-8' href="/order">ORDERS</a>
            <a className='ms-8' href="/inventry">INVEMTORY</a>
            <a className='ms-8' href="/login">LOGIN</a>
           </nav>
         
        </div>
    );
};

export default Header;