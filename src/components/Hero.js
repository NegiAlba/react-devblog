import React from 'react'

const Hero = () => {
    return (
    <section className="hero-section">
        <div className="hero-image-div">
            <img className="hero-image" src="./dist/backup.png" alt="Banner" />
        </div>
        <div className="hero-overlay-div"></div>
        <div className="hero-text-div">
                <img src="./dist/devblog.svg" alt=""/>
        </div>
    </section>
    )
}

export default Hero
