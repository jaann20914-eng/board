import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Index from "./index/Index";

import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import SignIn from './signin/SignIn';

function App() {
  



  return (
<<<<<<< HEAD
    <div className='container'>연동되는지 확인중</div>

=======
    <Router>
    
    <div className='container'>

        <Routes>
        <Route path="/" element={<Index />} ></Route>
        <Route path="/signin" element={<SignIn />} />
        </Routes>
    </div>
    </Router>
>>>>>>> 32173d8466d3ffb5cf1817768bda7a520250721b
  );
}

export default App;
