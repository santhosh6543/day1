import React, { Component } from 'react'
import './Res.css';
import pic1 from '..//src/components/g1.jpg';
import pic2 from '..//src/components/g2.jpg';
import pic3 from '..//src/components/g3.jpg';
import pic4 from '..//src/components/g4.png';
import pic5 from '..//src/components/g5.jpg';
import pic7 from '..//src/components/g7.png';
import pic8 from '..//src/components/g8.jpg';
import pic10 from '..//src/components/g10.jpg';
import { Link } from 'react-router-dom';

export class Rest extends Component {
  render() {
    return (
      <>
      <div className='bod5'>
      <header class="header">
      <nav class="navigation">
      <h1></h1>
     <Link to='/'>Home</Link>
     <Link to=''>About</Link>
     <Link to='/res'>Rooms</Link>
     <Link to=''>Contact</Link>
     <Link to='/login'>Login</Link>
      </nav>    
      </header>

     
<div className="bod3">
<div id="slideshow">
<div class="slide-wrapper">
    <div class="slide">
        <div className="heig">
              <img src={pic1}/>
        </div>
        
    </div>
    <div class="slide">
    <div className="heig">
        <img src={pic2}/>
        </div>
    </div>
    <div class="slide">
    <div className="heig">
        <img src={pic3}/>
        </div>
    </div>
    <div class="slide">
    <div className="heig">
        <img src={pic4}/>
        </div>
    </div>
    <div class="slide">
    <div className="heig">
        <img src={pic5}/>
        </div>
        </div>
        <div class="slide">
        <div className="heig"></div>
        <img src={pic7}/>
        </div>
        </div>
        <div class="slide">
        <div className="heig"></div>
        <img src={pic8}/>
        </div>
        </div>
        <div class="slide">
        <div className="heig"></div>
        <img src={pic10}/>
        </div>
        </div>
        </div>
      
        </>
        )
      }
    }
    
export default Rest;