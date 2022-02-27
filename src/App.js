import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';



const App = () => {

  return (
    <div className="App">
      <Header></Header>
      Start Here
      <Home></Home>
      <GlobalStyle/>
    </div>
  );
}

export default App;
