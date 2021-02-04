import React, { Component, useEffect } from 'react';
import './App.css';
import Shoes from './components/Shoes.js';
import AirJordan1 from './shoePictures/AirJordan1.jpg';
import AirJordan2 from './shoePictures/AirJordan2.jpg';
import AirJordan3 from './shoePictures/AirJordan3.jpg';
import AirJordan4 from './shoePictures/AirJordan4.jpg';
import AirJordan5 from './shoePictures/AirJordan5.jpg';
import AirJordan6 from './shoePictures/AirJordan6.jpg';
import AirJordan7 from './shoePictures/AirJordan7.jpg';
import AirJordan8 from './shoePictures/AirJordan8.jpg';
import AirJordan9 from './shoePictures/AirJordan9.jpg';
import AirJordan10 from './shoePictures/AirJordan10.jpg';
import AirJordan11 from './shoePictures/AirJordan11.jpg';
import AirJordan12 from './shoePictures/AirJordan12.jpg';
import SecondAirJordan1 from './shoePictures/SecondAirJordan1.jpg'

// function SecondPage(props) {
//   return (
//   <div>
//     <img className="shoePicturesSizeSecond" src={props.SecondPictureName}/>
//     <p>{props.description}</p>
//   </div>
//     )
// }

class App extends Component {
  render () {
    return (
      <Shoes />
    )
  }
}

export default App;

