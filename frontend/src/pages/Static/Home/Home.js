import React from 'react'
import NameLogo from './logo2.png'
import Button from 'react-bootstrap/Button'
import './home.css'
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';

export default function Home() {
  return (
    <div>
        <NavBar/>
        <div className="homeBackground">
            <div className="nameLogo">
                <img src={NameLogo}  alt="Read Connect Logo"></img>
            </div>
            <div className="intro">
                <h1>Welcome to Read Connect</h1>
                <p id='intro'>Read Connect is a state-of-the-art Library Management System designed exclusively for libraries. Packed with robust features, our user-friendly platform caters to the needs of librarians and library staff members, providing a seamless and efficient solution for all library operations. From cataloging and circulation to user management and reporting, Read Connect is your go-to resource for elevating library services.</p>
                <Button id='buttonHome'>
                  <Link to="/login" className='linkHome'>
                    Login
                  </Link>
                </Button>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}