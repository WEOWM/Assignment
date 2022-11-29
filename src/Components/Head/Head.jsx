import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Head.css'


const Head = () => {
  const [col, setCol] = useState("")

  window.onscroll = function () { scroll() };

  function scroll() {
    if (document.documentElement.scrollTop > 900) {
      setCol("rgb(122, 97, 72)")

    } else {
      setCol("")


    }
  }
  return (
    <>
      <div className="head" style={{ backgroundColor: `${col}` }} >

        <div className="left-head com-nav-bar ps-5">

          <li>
            <NavLink>HOME</NavLink>
          </li>

          <li>
            <NavLink>ABOUT</NavLink>
          </li>

          <li>
            <NavLink>RETREAT</NavLink>
          </li>

          <li>
            <NavLink>TELEMEDICINE</NavLink>
          </li>

          <li>
            <NavLink>YOGA</NavLink>
          </li>

        </div>

        <div className="center-head com-nav-bar ms-4">

          <h2>Ayurvedic</h2>

        </div>

        <div className="right-head com-nav-bar">

          <button className='btn btn-outline-dark ms-3 '>Assess</button>
          <button className='btn btn-outline-dark ms-3 '>Book </button>
          <i class="fa-solid fa-user "></i>
          <i class="fa-solid fa-cart-shopping"></i>

        </div>


      </div>

      {/* =========mobile======= */}

      <div className="mobile-head">
        <div className="mob-logo">
          <h2>Ayurvedic</h2>

        </div>
        <div className="mob-nav">
          <i class="fa-solid fa-bars me-3 fa-2x" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel"></h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-center align-items-center">
            <li>
            <NavLink>HOME</NavLink>
          </li>

          <li>
            <NavLink>ABOUT</NavLink>
          </li>

          <li>
            <NavLink>RETREAT</NavLink>
          </li>

          <li>
            <NavLink>TELEMEDICINE</NavLink>
          </li>

          <li>
            <NavLink>YOGA</NavLink>
          </li>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Head