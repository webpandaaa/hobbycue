import React from 'react'
import './Third.css'

const Third = () => {
    return (
        <div className='third'>
            <div className="first">
                <div className="card">
                    <div className="upper">
                        <img  className="one" src="./Thirdone.png" alt="" />
                        <h1>People</h1>
                    </div>
                    <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                    <button>Connect</button>
                </div>
                <div className="card">
                    <div className="upper">
                        <img src="./thirdsec.png" alt="" />
                        <h1>Place</h1>
                    </div>
                    <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                    <button>Meet Up</button>
                </div>
            </div>
            <div className="first">
                <div className="card">
                    <div className="upper">
                        <img src="./third.png" alt="" />
                        <h1>Product</h1>
                    </div>
                    <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                    <button>Get it</button>
                </div>
                <div className="card">
                    <div className="upper">
                        <img src="./thirdfour.png" alt="" />
                        <h1>Program</h1>
                    </div>
                    <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                    <button>Attend</button>
                </div>
            </div>
        </div>
    )
}

export default Third
