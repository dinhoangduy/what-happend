import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <p className="hero__launching">
          launching open event!
        </p>

        <div className="hero__event">
          <div className="hero__event__item">
            <span className="hero__event__item__star"></span>what
            <span className="hero__event__item__message__box">!!!!!</span>
          </div>
          <div className="hero__event__item">
            h
            <span className="hero__event__item__polygon"></span>
            ppend!
          </div>
          <div className="hero__event__item">
            mar-ket
            <div className="hero__event__item__thirties">Thirties</div>
          </div>
        </div>

        <div className="hero__progress">
          <div className="hero__progress__btn">
            lorem ipsum
          </div>
          <div className="hero__progress__arrow hero__progress__arrow__first">→</div>
          <div className="hero__progress__main">
            <div className="hero__progress__main__item">
              market<br />launching!
            </div>
          </div>
          <div className="hero__progress__arrow hero__progress__arrow__second">
            →
          </div>
          <div className="hero__progress__btn">
            lorem ipsum
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection