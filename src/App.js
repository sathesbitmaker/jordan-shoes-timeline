import React, { Component } from 'react';
import './App.css';
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

function FirstPage(props) {
  return (
            
    <div className="shoeDisplay">
          <img src={props.pictureName}  className="shoePicturesSize" />
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
    <img className="shoePicturesSizeSecond" src={props.SecondPictureName}/>
    <p>{props.description}</p>
  </div>
    )
}

class App extends Component {
  render() {
    return(
      <div className="Writing">

          <FirstPage  name="Air Jordan I" designer="Peter Moore" released="1985"
                      originalPrice="$65" first="firstTitle" pictureName={AirJordan1}/>

          <FirstPage  name="Air Jordan II" designer="Peter Moore" released="1986"
                      originalPrice="$100" pictureName={AirJordan2}/>


          <FirstPage  name="Air Jordan III" designer="Tinker Hatfield" released="1988"
                      originalPrice="$100" pictureName={AirJordan3}/>

           {/* <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> */}
          <FirstPage  name="Air Jordan IV" designer="Tinker Hatfield" released="1989"
                      originalPrice="$110" pictureName={AirJordan4}/>
           {/* </ScrollAnimation>  */}

          <FirstPage  name="Air Jordan V" designer="Tinker Hatfield" released="1990"
                      originalPrice="$125" pictureName={AirJordan5}/>

          <FirstPage  name="Air Jordan VI" designer="Tinker Hatfield" released="1991"
                      originalPrice="$125" pictureName={AirJordan6}/>
                
          <FirstPage  name="Air Jordan VII" designer="Tinker Hatfield" released="1992"
                      originalPrice="$125" pictureName={AirJordan7}/>

          <FirstPage  name="Air Jordan VIII" designer="Tinker Hatfield" released="1993"
                      originalPrice="$125" pictureName={AirJordan8}/>

          <FirstPage  name="Air Jordan IX" designer="Tinker Hatfield" released="1993"
                      originalPrice="$125" pictureName={AirJordan9}/>

          <FirstPage  name="Air Jordan X" designer="Tinker Hatfield" released="1994"
                      originalPrice="$125" pictureName={AirJordan10}/>

          <FirstPage  name="Air Jordan XI" designer="Tinker Hatfield" released="1995"
                      originalPrice="$125" pictureName={AirJordan11}/>

          <FirstPage  name="Air Jordan XII" designer="Tinker Hatfield" released="1996"
                      originalPrice="$135" pictureName={AirJordan12}/>





        <div>
            <SecondPage 
              SecondPictureName={SecondAirJordan1}
              description="This Air Jordan was the only one in the series to feature the familiar Nike Swoosh logo. And predating the Jumpman logo, the OG shoe featured the Wings logo - a basketball with wings stretching from both sides and Air Jordan printed above the ball. Nike filed the Wings logo as a trademark on May 7, 1985.
              Leather overlays on the upper offered durability and easy color blocking, and a perforated leather toe box lent ventilation."
            />
        </div>
      </div>
    )
  }
}

export default App;

