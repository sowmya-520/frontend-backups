import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
export default function HomePage() {
  return (
    <div className='header-box'>
        <div><h1>RENT FURLAX</h1></div>
        <div className='options' >
            <ul>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
            </ul>
        </div>
    </div>
  )
}

