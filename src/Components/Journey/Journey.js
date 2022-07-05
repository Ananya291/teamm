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
                Since the launch in July 2021 , Teambuy has been greatly loved & admired by its customers.
                Teambuy is present in all 23 pin codes of Jaipur & soon will be expanding to nearby towns.
                With more than 100000 MAU , we have helped our customers save more than INR 2 Million
              </p>
            </div>

          </div>

          <div className='journey_right_bottom'>

            <div className='journey_content_leftbottom'>
              <h2 className='journey_leftbottom_heading'>Why Teambuy ?</h2>
              <p className='journey_leftbottom_subheading'> Teambuy brings a wide curation of products at unbelievable prices
                under its group buying program where customers can either create their teams or join an existing one.
                This helps the entire team save upto 80% on products and get other exciting rewards only on Teambuy.
                Why just buy when you can Teambuy. </p>
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