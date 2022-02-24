import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';



const App = () => {

  return (
    <div className="App">
      <Header></Header>
      Start Here
      <GlobalStyle/>
    </div>
  );
}

export default App;
