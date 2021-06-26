import React from "react";
import "./locations.css";


class Locations extends React.Component {
  
    state = {
      cityIcon: '',
      cityTemperature: '',
      cityName: '',
      cityCountry: '',
      cityHumidity: '',
      cityWindDirection: '',
      cityWindSpeed: '',
    };
    
    
      fetchApi = async () => {
        var citynombre = 'Paris'
        const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
        const key = ",onuk&appid=810ff4c7454fb0d0f22a15da7ff9525b&units=metric";
        const response = await fetch(URL+citynombre+key)
        let responseJSON = await response.json()
        var directions = [
            "North",
            "North-East",
            "East",
            "South-East",
            "South",
            "South-West",
            "West",
            "North-West",
        ];
        var angle = responseJSON.wind.deg;
        var index =
          Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
        this.setState({
          cityIcon:"https://openweathermap.org/img/wn/"+(responseJSON.weather[0].icon)+".png",
          cityTemperature: responseJSON.main.temp,
          cityName: responseJSON.name,
          cityCountry: responseJSON.sys.country,
          cityHumidity: responseJSON.main.humidity,
          cityWindDirection: directions[index],
          cityWindSpeed: responseJSON.wind.speed,
        });
    }           
    
  componentDidMount(){
    window.addEventListener('load', this.fetchApi());
  }

  render() {
    const icon = this.state.cityIcon;
    return (
      <div id="locations">
        <div className="caja-location">
            <div id="nubes"><img id="icono" alt="icono" src={icon}></img></div>
            <div id="caja-temp"><a className="text-temp">{this.state.cityTemperature}<sup>&deg;C</sup></a></div>
            <div id="ciudad">
                <p id="ciudad"><strong>{this.state.cityName}</strong></p>
                <p id="pais">{this.state.cityCountry}</p>
            </div>
            <div id="datos-city">
                <a id="datos">Humidity {this.state.cityHumidity}%</a>
                <a id="datos">{this.state.cityWindDirection}</a>
                <a id="datos">{this.state.cityWindSpeed}km/h</a>
            </div>
        </div>
        <div id="caja-add-location">
            <div id="add-location"><a href="#" className="addLocationsText">Add Locations</a></div>
            <img id="location" alt="addLocation" src={process.env.PUBLIC_URL + "addLocation.png"}></img>
        </div>
      </div>
    );
  }
}

export default Locations;