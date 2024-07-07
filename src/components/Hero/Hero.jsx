import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="heroleft">
          <h1><i>Explore your <span>hobby</span> or <span>passion</span></i></h1>
          <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
          </p>
          <br />
          <br />
          <p>
          If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
          </p>
          <img src="./Hero.png" alt="" />
      </div>
      <div className="heroright">
        <div className='container'>
          <div>
            <a href="">Sign In</a>
            <a href="">Join In</a>
          </div>
          <div>
            <div className='button'>
              <img src="./google.png" alt="" />
              continue with Google
            </div>
            <div className='button'>
            <img src="./facebook.png" alt="" />
            continue with Facebook
            </div>
            <div></div>
          </div>
          <img className='connect' src="./connect.png" alt="" />
          <div className='input'>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
          </div>
          <div className='forgot'>
            <div className='remember'>
              <input className='checkbox' type="checkbox" /> Remember me
            </div>
            <div className='lock'>
              <img src="./lock.png" alt="" />
              <p>Forgot Password</p>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
