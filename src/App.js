import React, { Component } from 'react';
import './App.css';
import Places from './Components/places';
import Locations from './Components/locations';
import Forecast from './Components/forecast';
import PestanaLateral from './Components/pestanaLateral';


class App extends Component {

  
  render(){
    
    return (
      <div className="App">
        <section className="siteHeader">
          <img src={process.env.PUBLIC_URL+"bogota.jpg"} className="App-bogota" alt="bogota" />
          <a className="relative-text"><img id="icono-bogota" alt="icono" src={process.env.PUBLIC_URL+"locationIcon.png"}></img>Bogotá</a>  
        </section>
        <PestanaLateral/>
        <Forecast/>
        <Places />
        <Locations/>
      </div>
    );
  }
}
  
export default App;
