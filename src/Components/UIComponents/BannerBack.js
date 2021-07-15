import React from 'react'
import './BannerBack.css'
import BannerImg1 from '../SVGs/Educt.png'
import Butt from './Butt'
function BannerBack() {
    return (
        <>
          <div class="header">


<div className="inner-header flex">
<div className="BannerContainer">
<div className="banner-content">
<div className="banner-left">
    <div className="banner-left-header">
        <h1>We are the community</h1>
        <p>A family where we work together, grow together and most importanly have fun together.</p>
        <Butt Bcolor = 'transparent' textColor = '#fff' borderC = '#fff' text = 'Learn More'></Butt>
    </div>
</div>

<div className="banner-right">
    <img src={BannerImg1} width = '60px' alt="" />
</div>


</div>
        </div>

</div>

<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>


</div>
        </>
    )
}

export default BannerBack
