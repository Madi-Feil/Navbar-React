import React, { useContext } from 'react'
import Context from './../context/Context';

const NavBar = () => {
    const context = useContext(Context);

    return (
        <nav>
            <div class="nav-wrapper">
            <span class="brand-logo">Hello, {context.name}</span>
            </div>
        </nav>
    )
}

export default NavBar