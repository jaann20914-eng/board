import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Index from "./index/Index";

import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import SignIn from './signin/SignIn';

function App() {
  



  return (
    <Router>
    
    <div className='container'>

        <Routes>
        <Route path="/" element={<Index />} ></Route>
        <Route path="/signin" element={<SignIn />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
