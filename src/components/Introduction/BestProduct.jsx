import React from 'react'
import { Link } from 'react-router-dom';

import bestProductData from '../../assets/fake-data/bestProducts'


const BestProduct = () => {

    // ** Handle break title of product
    const handleBreakTitle = (display, breakAt) => {
        const top = display.split(" ").slice(0, breakAt);
        const bottom = display.split(" ").slice(breakAt);

        return `${top.join(" ")}\n${bottom.join(" ")}`;
    }
    // ** End of -> Handle break title of product


    return (
        <div className="best">

            <div className="container">
                <div className="best__title">
                    Best Product
                </div>
                <div className="best__content">
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </div>
                <div
                    className="best__products"
                    style={{
                        backgroundImage: "url(./image/best-bg.png)"
                    }}
                >
                    {
                        bestProductData.map((item, index) => (
                            <div className="best__products__item" key={index}>
                                <div className="best__products__item__index">
                                    <img src={item.indexIcon} alt={index} />
                                    <span>{`0${index + 1}`}</span>
                                </div>
                                <div className="best__products__item__image">
                                    <img src={item.img} alt={item.display} />
                                </div>
                                <div className="best__products__item__title">
                                    <div className="best__products__item__title__content">
                                        {handleBreakTitle(item.display, item.breakAt)}
                                    </div>
                                    <Link to={item.path}>
                                        <div className="best__products__item__title__btn">
                                            GO
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default BestProduct