import React, { useState } from 'react';
import '../componentes/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {

    const [click, setClick] = useState(false);
    const openClose = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <div className='navbar'>
            <Link to='/' className='ladoesquerdo'>
                <h1 className='logo-nome'>LOGO</h1>
                <i className='fas fa-pizza-slice' />
            </Link>

            <div className='ladodireito'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' onClick={closeMobileMenu}>
                     <Link to='/' className='nav-link'>
                        Home
                     </Link>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}>
                     <Link to='/menu' className='nav-link'>
                        Menu
                     </Link>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}>
                     <Link to='/about' className='nav-link'>
                        About
                     </Link>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}>
                     <Link to='/contact-us' className='nav-link'>
                        Contact
                     </Link>
                    </li>
                   
                </ul>

                <div className='menu-icon' onClick={openClose}>
                    <i className={click ? ' fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>

        </div>
    )
}
export default Navbar;