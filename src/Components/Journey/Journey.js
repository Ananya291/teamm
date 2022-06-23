import React from 'react'
import './Journey.css'
import giphy1 from './giphy1.gif'
import giphy3 from './giphy3.gif'

function Journey() {
  return (
    <div className='journey_component' id='Journey'>
      <h1 className='main_heading'>Our Journey</h1>
      <div className='journey_main'>

        <div className='journey_left'>

          <div className='journey_left_gif'>
            <img className='journey_gif1' src={giphy1}></img>
          </div>
          <div className='journey_content_left'>
            <h2 className='journey_left_heading'>Journey</h2>
            <p className='journey_left_subheading'>Teambuy was launched in June 2021 with a Pilot across 300 Jaipur households with an aim to make goods and services<br />
              more affordable & accessible for Bharat and test the likability for Group buying and consumer behaviour towards it.
            </p>
          </div>

        </div>

        <div className='journey_right'>

          <div className='journey_right_top'>
            <div className='journey_righttop_gif'>
              
            </div>

            <div className='journey_content_righttop'>
              <h2 className='journey_righttop_heading'>Our Growth</h2>
              <p className='journey_righttop_subheading'>
                Since then Teambuy has grown to a community of 13000 + customers and has completed more than 30k orders.<br />
                MoM growth of 58% inGroup buying revenue has given us the validation we needed to move forward.<br />
                Based on the Customer feedback we have upgraded our UI by making team formation simpler and<br />
                more convenient through AI led product discovery & Gamification.<br />
                The Teambuy mobile App is currently under Beta testing and will be launching soon.
              </p>
            </div>

          </div>

          <div className='journey_right_bottom'>

            <div className='journey_content_leftbottom'>
              <h2 className='journey_leftbottom_heading'>Why to choose us?</h2>
              <p className='journey_leftbottom_subheading'> A Social commerce platform which could lead the E-commerce 3.0 revolution has arrived.<br />
                Teambuy is on track to become the first choice for the next 500Mn online consumers of Bharat.</p>
            </div>

            <div className='journey_rightbottom_gif'>
              <img className='journey_gif3' src={giphy3}></img>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Journey