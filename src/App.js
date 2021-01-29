import ScrollAnimation from 'react-animate-on-scroll';
import React, { Component } from 'react';
import './App.css';
import AirJordan1 from './shoePictures/AirJordan1.jpg';
import SecondAirJordan1 from './shoePictures/SecondAirJordan1.jpg'
import AirJordan2 from './shoePictures/AirJordan2.jpg';

function FirstPage(props) {
  return (
          <div>
          <h1 className="firstTitles" id={props.first}>{props.name}</h1>
          <h2 className="otherTitles">Designer: {props.designer}</h2>
          <h2 className="otherTitles">Released: {props.released}</h2>
          <h2 className="otherTitles">Original Price: {props.originalPrice}</h2>
          </div> 
  )
}

function SecondPage(props) {
  return (
  <div>
    <p>{props.description}</p>
  </div>
    )
}

class App extends Component {
  render() {
    return(
      <div className="Writing">
          <img src={AirJordan1}  className="shoePicturesSize" />
        <div className="firstDisplay">
          <FirstPage  name="Air Jordan I" 
                  designer="Peter Moore"
                  released="1985"
                  originalPrice="$65"
                  first="firstTitle"
                  />
        </div>
       
          <div style={{backgroundColor: "black"}}>
            <img className="shoePicturesSizeSecond" src={SecondAirJordan1}/>
            <SecondPage 
              description="This Air Jordan was the only one in the series to feature the familiar Nike Swoosh logo. And predating the Jumpman logo, the OG shoe featured the Wings logo - a basketball with wings stretching from both sides and Air Jordan printed above the ball. Nike filed the Wings logo as a trademark on May 7, 1985.
              Leather overlays on the upper offered durability and easy color blocking, and a perforated leather toe box lent ventilation."
            />
          </div>
        <img src={AirJordan2} className="shoePicturesSize" />
        <div className="firstDisplay">
        <FirstPage  name="Air Jordan II" 
                    designer="Peter Moore"
                    released="1986"
                    originalPrice="$100"
        />
        </div>
      </div>
    )
  }
}

export default App;

