import * as React from "react";


const Hero = ({ heroText, heroImage, heroSrcSet }) => (
  <div className="siteHero">
    <div className="siteHero__container">
        <div className="headerText--container">
            <h1 className="headerText">{heroText}</h1>
        </div>
        <img src={heroImage} srcSet={heroSrcSet} alt="hero image" />
    </div>
    <div className="headerBottom">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: `100%`, width: `100%`}}>
            <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{stroke: `none`, fill: `#FF6F29`}}></path>
        </svg>
    </div>
  </div>
)



export default Hero;
