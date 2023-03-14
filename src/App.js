import React, {useState} from 'react';
import {HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from'./components/navbar'
import Home from'./components/Home'
import Abstract from'./components/Abstract'
import Register from'./components/Register'


import './index.css'
function App() {
      const [show, setShow] = useState(true);
      const func = () => {
        setShow(show => !show)
      }
  return (

    

      
      
      
          <HashRouter>
            <Navbar func={func}/>
            <Routes>
    


          <Route exact path='/' element={show && <Home/>} />
<Route exact  path='/register' element={show &&  <Register/>} />
  <Route exact path='/abstract' element={show && <Abstract/>} />
      
      
    
</Routes>
<Footer show={show}/>
    </HashRouter>
 
    
  );
}


export default App;

