import './App.css';
import Nav from './Components/Navigation/Nav';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tnc from './Components/Tnc/Tnc';
import Privacy from './Components/Privacy/Privacy'
import HomePage from './Container/HomePage';
import CP from './Components/CP/CP.js';
import Refund from './Components/Refund/Refund';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tnc' element={<Tnc />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/cp' element={< CP />} />
          <Route path='/refund' element={< Refund />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
