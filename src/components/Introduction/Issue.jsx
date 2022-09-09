import React from 'react'

import arrowImg from '../../assets/images/issue/arrow.png';

import sliderData from '../../assets/fake-data/slider';
import { Link } from 'react-router-dom';

import obj1 from '../../assets/images/issue/news-object-01.png'
import obj2 from '../../assets/images/issue/news-object-02.png'
import obj3 from '../../assets/images/issue/news-object-03.png'
import obj4 from '../../assets/images/issue/news-object-04.png'
import obj5 from '../../assets/images/issue/news-object-05.png'

const Issue = () => {


    return (
        <div className="issue">
            <div className="container">
                {/* Obj for decoration */}
                <div className="issue__obj issue__obj__5">
                    <img src={obj5} alt="obj5" />
                </div>
                <div className="issue__obj issue__obj__4">
                    <img src={obj4} alt="obj4" />
                </div>
                <div className="issue__obj issue__obj__3">
                    <img src={obj3} alt="obj3" />
                </div>
                <div className="issue__obj issue__obj__2">
                    <img src={obj2} alt="obj2" />
                </div>
                <div className="issue__obj issue__obj__1">
                    <img src={obj1} alt="obj1" />
                </div>
                {/* End of ->  Obj for decoration */}


                <div className="issue__title">
                    Happened’s issue
                </div>
                <div className="issue__description">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </div>
                <div className="issue__btn main-btn">SEE MORE</div>

                <div className="issue__main">
                    <div className="issue__main__intro">
                        <div className="issue__main__intro__title">
                            whpn <br />issue
                        </div>
                        <div className="issue__main__intro__arrow">
                            <img src={arrowImg} alt="arrow" />
                        </div>
                    </div>
                    <div className="issue__main__slider">

                        {
                            sliderData.map((item, index) => (
                                <div
                                    className="issue__main__slider__item"
                                    key={index}
                                >
                                    <div className={`issue__main__slider__item__title ${index % 3 === 2 ? "orange" : ""}`}
                                    >
                                        {item.display}
                                    </div>
                                    <Link to="/coming-soon">

                                        <div className="issue__main__slider__item__image">
                                            <img
                                                src={item.img}
                                                alt={item.display}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Issue