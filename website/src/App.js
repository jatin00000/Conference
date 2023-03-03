import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from'./components/navbar'
import Home from'./components/Home'
import Abstract from'./components/Abstract'
import Register from'./components/Register'
import Places from './components/Places'

import './index.css'
function App() {
      const [show, setShow] = useState(true);
      const func = () => {
        setShow(show => !show)
      }
  return (

    <>

      
      
      
          <Router>
    <Navbar func={func}/>

      <Routes>
          <Route exact path='/' element={show && <Home/>} />
<Route exact path='/register' element={show &&  <Register/>} />
  <Route exact path='/abstract' element={show && <Abstract/>} />
      </Routes>
      
    <Footer show={show}/>
    </Router>
    </>
    
  );
}


export default App;

