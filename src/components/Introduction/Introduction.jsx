import React from 'react'


const Introduction = () => {
    return (
        <div className="introduction"style={{
            backgroundImage: "url('./image/introduction-bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>

            <div className="container" >
                <div className="introduction__title">
                    What Happened!
                </div>
                <div className="introduction__content">
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create <br />
                    mobile-optimized videos in minutes.
                </div>
            </div>
        </div>
    )
}

export default Introduction