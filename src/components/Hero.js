import React from "react";
import hero from '../images/hero.png'
import '../style/hero.css'

const Hero=()=>
{
    return (
        <section id="Hero-sec">
            <div className="hero-text">
                <h1>Kitchens for life Made in Germany</h1>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <hr/>
            </div>

            <img src={hero}/>
        </section>
    )
}

export default Hero;