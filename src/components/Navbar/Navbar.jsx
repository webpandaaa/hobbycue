import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="navleft">
        <img src="./Logo.png" alt="" />
        <div className="searchdiv">
            <input type="text" placeholder='Search here...' />
            <i class="ri-search-line"></i>
        </div>
      </div>
      <div className="navright">
        <div className='firstpart'>
          <img src="./explore.png" alt="" />
          <img src="./hobbies.png" alt="" />
        </div>
        <div className="secondpart">
          <i class="ri-bookmark-fill"></i>
          <i class="ri-notification-4-fill"></i>
          <i class="ri-shopping-cart-2-fill"></i>
          <button>Sign in</button>
        </div>
        <img className='menu  ' src="./nav.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar
