import React from 'react'
import './Five.css'

const Five = () => {
  return (
    <div className='five'>
      <div className="container">
        <div className="upper">
            <img src="./Five.png" alt="" />
            <h1>Testimonials</h1>
        </div>
        <p>
        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="lower">
            <div className="left">
                    <img src="./Fiveone.png" alt="" />
                    <div className='mid'>
                        <div className='line'></div>
                        <p>0:00</p>
                    </div>
                    <img src="./Ficetwo.png" alt="" />
            </div>
            <div className="right">
                <img src="./Fivethree.png" alt="" />
                <div className="text">
                    <h2>Shubha Nagarajan</h2>
                    <h3>Classical Dancer</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Five
