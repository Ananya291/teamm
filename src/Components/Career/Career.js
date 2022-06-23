import React from 'react'
import CareerImg from './career.gif'
import './Career.css'

function Career() {
    return (
        <div className='career_component' id='Career'>
            <h1 className='career_heading'>Career</h1>
            <div className='career_main'>
                <div className='career_right'>
                    <p className='career_text'>If you’re passionate about working in the E-commerce space and want to disrupt the current trends of E-commerce in India ,<br />
                        please write to us on <span className='career_site'>careers@teambuy.co.in </span></p>
                </div>
                <div className='career_left'>
                    <img className='career_img' src={CareerImg}></img>
                </div>
            </div>
        </div>
    )
}

export default Career