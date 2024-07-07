import React from 'react'
import './Seven.css'

const Seven = () => {
    return (
        <div className='seven'>
            <div className='cnt'>
                <div className="left">
                    <div className="first">
                        <h1>Hobbycue</h1>
                        <ul>
                            <li>About us</li>
                            <li>Our Services</li>
                            <li>Work with Us</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="first">
                        <h1>How Do I</h1>
                        <ul>
                            <li>Sign Up</li>
                            <li>Add a Listing</li>
                            <li>Claim Listing</li>
                            <li>Post a Query</li>
                            <li>Add a Blog Post</li>
                            <li>Other Queries</li>
                        </ul>
                    </div>
                    <div className="first">
                        <h1>Quick Links</h1>
                        <ul>
                            <li>Listings</li>
                            <li>Blog Posts</li>
                            <li>Shop / Store</li>
                            <li>Community</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <h1>Social Media</h1>
                    <img src="./seven.png" alt="" />
                    <h1>Invite Friends</h1>
                    <div className="searchdiv">
                        <input type="email" placeholder='Email Id' />
                        <p>Invite</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>© Purple Cues Private Limited</p>
            </div>
        </div>
    )
}

export default Seven
