

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar></Navbar>
        <News pageSize={12}></News>
        {/* <Routes>
          <Route exact path="/" ><News Key="general" pageSize={12} category="general"></News></Route>
          <Route exact path="/business" ><News Key="business" pageSize={12} category="business"></News></Route>
          <Route exact path="/entertainment"> <News Key="entertainment" pageSize={12} category="entertainment"></News></Route>
          <Route exact path="/science" ><News Key="science" pageSize={12} category="science"></News></Route>
          <Route exact path="/health" ><News Key="health" pageSize={12} category="health"></News></Route>
          <Route exact path="/sports" ><News Key="sports" pageSize={12} category="sports"></News></Route>
          <Route exact path="/technology"><News Key="technology" pageSize={12} category="technology"></News></Route>

        </Routes> */}
      </div>
      </>
    )
  }
}
