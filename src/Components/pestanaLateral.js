import React from "react";
import "./pestanalateral.css";


class PestanaLateral extends React.Component {

    state = {
        temperature: '',
        city:'',
        clouds:'',
        icon:'',     
        error: null
    };

    fetchApi = async () => {
    
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bogota,onuk&appid=810ff4c7454fb0d0f22a15da7ff9525b&units=metric'
      const response = await fetch(url)
      let responseJSON = await response.json()
      this.setState({
        temperature: responseJSON.main.temp,
        city: responseJSON.name,
        clouds: responseJSON.weather[0].main,
        icon: "https://openweathermap.org/img/wn/"+(responseJSON.weather[0].icon)+".png",
        error: null
      });
    
      }
      
    componentDidMount(){
      window.addEventListener('load', this.fetchApi());
    }

    render() {
        const temperature = Math.round(this.state.temperature);
        const icon = this.state.icon;
        const clouds = this.state.clouds;
        return (
          <div>
            <div className="pes-lateral"><div className="texto-temp">{temperature}<sup>&deg;C</sup></div></div>
            <div id="curva-pes-arriba"></div>
            <div id="curva-pes-abajo"></div>
            <div className="pes-lateral-2"><img id="icono-nubes" alt="icono" src={icon}/><a id="clouds">{clouds}</a></div>
          </div>
        );
      }
}
export default PestanaLateral;