import logo from '../logo.svg';
import './style.css';
import CartWidget from './CartWidget';


const NavBar = () =>{
    return (
        <div className='navbar-container' >
            <div>
                <img width={'100px'}src={logo} alt="logo" />
            </div>
            <div>
                <ul>
                    <li><a href='#'>Home</a></li>

                    <li><a href='#'>About</a></li>

                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div>
                  <CartWidget/>
            </div>
        </div>

    );
};

export default NavBar;