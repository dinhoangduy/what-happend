import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Rodal from 'rodal';

import CustomCursor from 'custom-cursor-react';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {

    // ** Auto Scoll when navigate
    const { pathname } = useLocation();

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [pathname])
    // ** End of -> Auto Scoll when navigate

    // ** Handle Modal
    const [isShowModal, setIsShowModal] = useState(false);
    const handleCloseModal = () => {
        window.localStorage.setItem("isShowModal",  true);
        setIsShowModal(false);
    }
    useEffect(() => {
        let condition = window.localStorage.getItem("isShowModal");

        if (!condition) {
            setIsShowModal(true);
        }

    }, [pathname])
    // ** End of -> Handle Modal


    return (
        <>
            <Header />
            <div className="main">
                <Outlet />
                <ToastContainer />
                <CustomCursor
                    targets={['a', '.your-css-selector']}
                    customClass='custom-cursor'
                    dimensions={100}
                    targetScale={1.5}
                    fill='#FFF'
                    smoothness={{
                        movement: 0.2,
                        scale: 0.2,
                        opacity: 0.5,
                    }}
                    targetOpacity={0.5}
                />
                <Rodal
                    visible={isShowModal}
                    onClose={handleCloseModal}
                    className="modal__custom"
                >
                    <div className="title">🚀 Something I want to say! 🚀</div>
                    <div className='content'>Since it's not possible to get images from Ziplip in the first section, I had to replace them using some simple shapes. I also tried Canvas to draw it, but everything fails! </div>
                    <div className='content'>
                        But you know what? Everything else is good, at least I think so, LOL
                    </div>
                    <div className="content">
                        Finally, hope you like it!
                    </div>
                    <div className="content special">
                        And one more thing, this Modal is only visible once so you won't be bothered when refreshing website!
                    </div>
                </Rodal>
            </div>
            <Footer />
        </>
    )
}

export default Layout