import React, { useState } from 'react'
import './NavBar.css'
import { FaBars,FaTimes } from 'react-icons/fa'
import SideBar from './SideBar';
function NavBar() {

const[activeNavbar, setactiveNavbar] = useState(false);



const NavbarHandler = () =>{

    setactiveNavbar(!(activeNavbar));

}



    return (
          <div className="NavBar">
              <SideBar active = {activeNavbar}/> 
              <div className="Nav-icon" onClick = {NavbarHandler}>
    {activeNavbar ? <FaTimes/>:<FaBars/>}
</div>
          <div className="NavContainer">
              <div className="Nav-logo"><h1>StartUpply</h1></div>
             

                  <div className="NavMenu">

                      <div className="NavLinks">                
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="signIn">Sign in</a></li>                
                      </div>

                 <div className="NavBtn"><button>Sign Up</button></div>
                  </div>
                  
                  </div>  
                  </div>
        
    )
}

export default NavBar
