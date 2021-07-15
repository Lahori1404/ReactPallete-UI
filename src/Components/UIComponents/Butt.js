import React from 'react'
import './Butt.css'

function Butt(props) {
    return (
        <>
          <button className = 'gen-btn' style = {{backgroundColor:`${props.Bcolor}`,color:`${props.textColor}`,border:`2px solid ${props.borderC}`}}>{props.text}</button>  
        </>
    )
}

export default Butt
