import React from 'react';
import styled from 'styled-components';
import Lamp from './Lamp';
import LampSwitch from './LampSwitch';
import { useState } from 'react';

import './App.css';

const Room = styled.div `
  position: relative;
  widht: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;
// class LampOne{
//   isLampOneOn = false;
//   setLampOne(){
//     this.isLampOneOn = !this.isLampOneOn;
//   }
// }
// class LampTwo{
//   isLampTwoOn = false;
//   setLampOne(){
//     this.isLampTwoOn = !this.isLampTwoOn;
//   }
// }

const App = () => {

  const [isLampOneOn, setIsLampOneOn] = useState(false);
  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);
  
  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position='left'></Lamp>
      <Lamp lampOn={isLampTwoOn} position='right'></Lamp>

      <LampSwitch name='one'
        callback = {handleLightSwitchOne}
        switchOn = {isLampOneOn}
        position = 'left'></LampSwitch>
      <LampSwitch name='two'
        callback = {handleLightSwitchTwo}
        switchOn = {isLampTwoOn}
        position = 'right'></LampSwitch>
    </Room>
  );
}

export default App;
