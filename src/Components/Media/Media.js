import React from 'react'
import './Media.css'

function Media() {
    return (
        <div className='media_component'>
            <div className='media_left'>
                <iframe className='media_link' src="https://www.youtube-nocookie.com/embed/2Jy--Qllezw"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <div className='media_right'>
                <h1 className='media_heading'>Buy in a group and get your groceries delivered to your doorstep at unmatched prices!</h1>
                <p className='media_subheading'>Welcome to TeamBuy, an app that lets you avail unbelievable discounts on your daily grocery and home essentials. All you have to do is form a team or join one on TeamBuy!
                    With TeamBuy, grocery shopping is fun, interactive, easy and inexpensive!
                    On top of all this, your order will be delivered to your home in the shortest time frame possible!
                </p>
            </div>

        </div>
    )
}

export default Media