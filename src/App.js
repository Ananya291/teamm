import './App.css';
import Nav from './Components/Navigation/Nav';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About'
import Media from './Components/Media/Media'
import Journey from './Components/Journey/Journey';
import Career from './Components/Career/Career';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
     <About/>
     <Media/>
     <Journey/>
     <Career/>
     <Footer/>
    </div>
  );
}

export default App;
