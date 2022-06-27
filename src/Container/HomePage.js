import React from 'react'
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About'
import Media from '../Components/Media/Media'
import Journey from '../Components/Journey/Journey';
import Career from '../Components/Career/Career';

function HomePage() {
  return (
    <div>
        <Banner />
        <About />
        <Media />
        <Journey />
        <Career />
    </div>
  )
}

export default HomePage