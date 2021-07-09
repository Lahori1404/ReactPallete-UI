import React from 'react'
import './Pallete.css'


function Pallete(props) {

    const bColor = props.color;
    const borRadius = props.bradius;
    return (
            <div className="pallete-outer" style = {{backgroundColor:bColor,borderRadius:borRadius}}>
<img src={props.img} alt="" />
<h1>{props.heading}</h1>
<div className="innerText">
    <p>{props.para}</p>
    </div>
<button className = 'read-more' style = {{color:bColor}}>Learn More</button>
            </div>
    );
}

export default Pallete;
