// import React from "react";
import {Route,Routes} from 'react-router-dom';
import Loginsignup from "./Loginsignup";
import Registration from "./Registration";

import React, { Component } from 'react'
import Rest from './restaurant';

export class Connect extends Component {
  render() {
    return ( 
        <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/login" element={<Loginsignup />} />
        <Route path="/res" element={<Rest/>}/>
        </Routes>
    )
  }
}

export default Connect
