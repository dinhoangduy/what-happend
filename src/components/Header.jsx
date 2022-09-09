import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const leftMenu = [
  {
    display: "introduction",
    path: "/",
  },
  {
    display: "solution",
    path: "/solution",
  },
  {
    display: "rate plan",
    path: "/rate-plan",
  }
]

const rightMenu = [
  {
    display: "login",
    path: "/login",
  },
  {
    display: "apply for free use",
    path: "/apply",
  },
]

import logo from '../assets/images/logo.png'
const Header = () => {

  // ** Set active navbar
  const { pathname } = useLocation();

  const handleCheckMenuLeft = path => {
    return leftMenu.findIndex(item => item.path === pathname && item.path === path)
  }

  const handleCheckMenuRight = path => {
    return rightMenu.findIndex(item => item.path === pathname && item.path === path)
  }

  const handleOption = {
    "left": handleCheckMenuLeft,
    "right": handleCheckMenuRight
  }

  const handleCheckActiveNav = (place, path) => {
    return handleOption[place](path);
  }
  // ** End of ->Set active navbar

  // ** Open And Close Menu in Tablet and smaller size
  const menuRef = useRef(null);

  const handleOpenMenu = () => {
    menuRef.current.classList.add("active");
  }

  const handleCloseMenu = () => {
    menuRef.current.classList.remove("active");
  }

  // ** End of -> Open Menu in Tablet and smaller size

  // ** Shrink header when scroll over 80 px
  const headerRef = useRef(null);
  const handleShrinkHeader = () => {
    const condition = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
    condition
      ? headerRef.current.classList.add("shrink")
      : headerRef.current.classList.remove("shrink")

  }
  useEffect(() => {
    window.addEventListener("scroll", handleShrinkHeader);

    return () => {
      window.removeEventListener("scroll", handleShrinkHeader)
    }
  }, [])


  // ** End of ->  Shrink header when scroll over 80 px




  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="what happend's logo" />
          </Link>
        </div>

        <div className="header__menu" ref={menuRef}>
          <div
            className="header__menu-close"
            onClick={handleCloseMenu}
          >
            <i className='bx bx-chevrons-right' ></i>
          </div>
          <div className="header__menu__left">
            {
              leftMenu.map((item, index) => (
                <div
                  className={`
                    header__menu__item 
                    ${handleCheckActiveNav("left", item.path) === index ? "active" : ""}
                  `}
                  key={index}
                  onClick={handleCloseMenu}
                >
                  <Link to={item.path}>
                    {item.display}
                  </Link>
                </div>
              )
              )
            }
          </div>
          <div className="header__menu__break"></div>
          <div className="header__menu__right">
            {
              rightMenu.map((item, index) => (
                <div
                  className={`
                    header__menu__item 
                    ${handleCheckActiveNav("right", item.path) === index ? "active" : ""}
                  `}
                  key={index}
                  onClick={handleCloseMenu}
                >
                  <Link to={item.path}>
                    {item.display}
                  </Link>
                </div>
              )
              )
            }
          </div>
        </div>

        <div className="header-open" onClick={handleOpenMenu}>
          <i className='bx bx-menu-alt-right'></i>
        </div>
      </div>
    </div>
  )
}

export default Header