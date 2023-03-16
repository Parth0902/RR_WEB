import React from 'react'
import logo from '../images/Logo.png'
import '../style/nav.css'
const Nav=()=>
{
    return (

        <section id="nav">

          <img src={logo}/>

          <ul className='Links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Brands</a></li>
            <li><a href='#'>Experiene Center</a></li>
            <li><a href='#'>About Us</a></li>
          </ul>
        </section>

    )

}

export default Nav;
