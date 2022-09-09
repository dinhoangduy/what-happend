import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'

import videoPreview from "../../assets/images/video/preview.png"

import obj1 from '../../assets/images/video/video-object-01.png'
import obj2 from '../../assets/images/video/video-object-02.png'
import obj3 from '../../assets/images/video/video-object-03.png'
import obj4 from '../../assets/images/video/video-object-04.png'
import obj5 from '../../assets/images/video/video-object-05.png'
import obj6 from '../../assets/images/video/video-object-06.png'
import obj7 from '../../assets/images/video/video-object-07.png'
import obj8 from '../../assets/images/video/video-object-08.png'
import obj9 from '../../assets/images/video/video-object-09.png'

const VideoSection = () => {

    // ** Action play and pause for video
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVdieo = () => {
        setIsPlaying(true)
    }
    const handlePauseVdieo = () => {
        setIsPlaying(false)
    }


    // ** End of -> Action play and pause for video

    return (
        <div className="video">
            <div className="container">
                {/*Obj for decoration */}
                <div className="video__obj video__obj__9">
                    <img src={obj9} alt="obj9" />
                </div>
                <div className="video__obj video__obj__8">
                    <img src={obj8} alt="obj8" />
                </div>
                <div className="video__obj video__obj__7">
                    <img src={obj7} alt="obj7" />
                </div>
                <div className="video__obj video__obj__6">
                    <img src={obj6} alt="obj6" />
                </div>
                <div className="video__obj video__obj__5">
                    <img src={obj5} alt="obj5" />
                </div>
                <div className="video__obj video__obj__4">
                    <img src={obj4} alt="obj4" />
                </div>
                <div className="video__obj video__obj__3">
                    <img src={obj3} alt="obj3" />
                </div>
                <div className="video__obj video__obj__2">
                    <img src={obj2} alt="obj2" />
                </div>
                <div className="video__obj video__obj__1">
                    <img src={obj1} alt="obj1" />
                </div>
                {/*End of -> Obj for decoration  */}

                <div className="video__title">
                    what happened
                </div>
                <div className="video__description">
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </div>
                <div className="video__btn main-btn">SEE MORE</div>

                <div className="video__main">
                    <div className="video__main__header">
                        <div className="video__main__header__icon">
                            <i className='bx bxs-star'></i>
                        </div>
                        <div className="video__main__header__title">
                            what happened
                        </div>
                        <div className="video__main__header__vertical">

                        </div>
                        <div className="video__main__header__close">
                            <i className='bx bx-x'></i>
                        </div>
                    </div>
                    <Link to="/coming-soon">

                        <div className="video__main__bar">
                            <div className="video__main__bar__url">
                                www. whpn.com/brandstory
                            </div>
                            <div className="video__main__bar__foward">
                                →
                            </div>
                        </div>
                    </Link>
                    <div className="video__main__video">
                        <ReactPlayer
                            playing={isPlaying}
                            url='https://www.youtube.com/watch?v=TIthXhCSgPE'
                            width={"100%"}
                            height={"auto"}
                            controls={true}
                            volume={0.5}
                            className="asdfsdkfjask"
                        />
                        {!isPlaying && <div className="video__main__video__preview">
                            <img src={videoPreview} alt="video-preview" />
                        </div>
                        }
                    </div>
                </div>


                <div
                    className="video__btn__action__item video__btn__action__item-play"
                    onClick={handlePlayVdieo}
                >
                    <i class='bx bx-play' ></i>
                </div>
                <div
                    className="video__btn__action__item video__btn__action__item-pause"
                    onClick={handlePauseVdieo}
                >
                    <i class='bx bx-pause' ></i>
                </div>


            </div>
        </div>
    )
}

export default VideoSection