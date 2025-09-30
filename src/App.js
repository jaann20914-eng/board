import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import SignIn from './signin/SignIn';
import axios from "axios";
import useAuthStore from './store/authStore';
import Home from './home/Home';
import Login from './login/Login';
import Board from './board/Board';



axios.defaults.withCredentials =true; // axios가 자신이 가지고 있는 세션키가 있으면 보내게함

function App() {
  
  const isLogined = useAuthStore((state)=>state.isLogined);


  return (
<<<<<<< HEAD
    <div className='container'>연동되는지 확인중</div>

=======
    <Router>
    
    <div className='container'>
        <Routes>
        <Route path="/" element={isLogined ? <Home /> : <Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/board" element={<Board />} />
        </Routes>
    </div>
    </Router>
>>>>>>> 32173d8466d3ffb5cf1817768bda7a520250721b
  );
}

export default App;
