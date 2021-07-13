import React from 'react'
import './Sidebar.css'

function SideBar(props) {
    return (


        <div className = "sidebar" style = {{top:`${props.active ? "0":"-100%"}`}}>
            <div className="sideBarcontainer">
            <div className="sideLinks">                
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="signIn">Sign in</a></li>                
                      </div>


                      <div className="NavBtn"><button>Sign Up</button></div>
    
        </div></div>
    )
}
 
export default SideBar
