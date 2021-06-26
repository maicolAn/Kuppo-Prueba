import React from 'react';
import "./forecast.css";


class Forecast extends React.Component{

    state = {
        fecha_day1:'',
        fecha_day2:'',
        fecha_day3:'',
        temp_min_day1:'',
        temp_max_day1:'',
        temp_max_day2:'',
        temp_min_day2:'',
        temp_min_day3:'',
        temp_max_day3:'',
        weather_day1:'',
        weather_day2:'',
        weather_day3:'',
        iconday1:'',
        error: null
      };

    fetchApi = async () => {
        const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Bogota,onuk&appid=810ff4c7454fb0d0f22a15da7ff9525b&units=metric'
        const response2 = await fetch(url2)
        let responseJSON2 = await response2.json()
        var rows= [];
        var s = 1;
        for (var i=0; i< 39; i++){
            if((new Date(responseJSON2.list[i].dt_txt).getDate()) != new Date(responseJSON2.list[s].dt_txt).getDate()){
              const day1= new Date(responseJSON2.list[i].dt_txt).getDate();
              rows.push(day1);
              
            }
            s=s+1;
          }
          var temp_day1 = []
          var temp_day2 = []
          var temp_day3 =[]
          var weatherday1=''
          for (var b=0; b<40; b++){
            if((new Date(responseJSON2.list[b].dt_txt).getDate()) == rows[0]){
              temp_day1.push(responseJSON2.list[b].main.temp);
              weatherday1= responseJSON2.list[b].weather[0].main;
              
            }
          }
          var dia_semana2=''
          var weatherday2=''
          for (var c=0; c<40; c++){
            if((new Date(responseJSON2.list[c].dt_txt).getDate()) == rows[1]){
              temp_day2.push(responseJSON2.list[c].main.temp);
              dia_semana2= new Date(responseJSON2.list[c].dt_txt).getDay();
              weatherday2= responseJSON2.list[i].weather[0].main;
            }
          }
          var weatherday3=''
          var dia_semana3=''
          for (var d=0; d<40; d++){
            if((new Date(responseJSON2.list[d].dt_txt).getDate()) == rows[2]){
              temp_day3.push(responseJSON2.list[d].main.temp);
              dia_semana3= new Date(responseJSON2.list[d].dt_txt).getDay();
              weatherday3= responseJSON2.list[i].weather[0].main;
            }
          }
          const temp_min_day1 =Math.round(Math.min(...temp_day1))
          const temp_max_day1 = Math.round(Math.max(...temp_day1))
          const temp_min_day2 =Math.round(Math.min(...temp_day2))
          const temp_max_day2 = Math.round(Math.max(...temp_day2))
          const temp_min_day3 =Math.round(Math.min(...temp_day3))
          const temp_max_day3 = Math.round(Math.max(...temp_day3))
          this.setState({
            
            fecha_day1: responseJSON2.list[0].dt_txt,
            fecha_day2: dia_semana2,
            fecha_day3: dia_semana3,
            temp_min_day1: temp_min_day1,
            temp_min_day2: temp_min_day2,
            temp_min_day3: temp_min_day3,
            temp_max_day1: temp_max_day1,
            temp_max_day2: temp_max_day2,
            temp_max_day3: temp_max_day3,
            weather_day1: weatherday1,
            weather_day2: weatherday2,
            weather_day3: weatherday3,
            iconday1: "https://openweathermap.org/img/wn/"+"10d"+".png",
            error: null
          });
      
    }
    componentDidMount(){
        window.addEventListener('load', this.fetchApi());
      }
      
    render() {
        const dias = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const fecha_day1 = this.state.fecha_day1;
        const numeroDia1 = new Date(fecha_day1).getDay();
        const nombreDia1 = dias[numeroDia1];
        const nombreDia2 = dias[this.state.fecha_day2];
        const nombreDia3 = dias[this.state.fecha_day3];
        const tempe_maxday1 = this.state.temp_max_day1;
        const tempe_maxday2 = this.state.temp_max_day2;
        const tempe_maxday3 = this.state.temp_max_day3;
        const tempe_minday1 = this.state.temp_min_day1;
        const tempe_minday2 = this.state.temp_min_day2;
        const tempe_minday3 = this.state.temp_min_day3;
        const iconday1 = this.state.iconday1;
        const weather_day1 = this.state.weather_day1;
        const weather_day2 = this.state.weather_day2;
        const weather_day3 = this.state.weather_day3;
        return(
            <div id="forcast">
                <label><p className="titulos"><strong>3 Days</strong> Forecast</p></label>
                <label>
                    <div className="cajas-forecast">
                        <img id="icono" src={iconday1} atl="icono"/>
                        <div id="cajas-dias">
                            <p id="dias">{nombreDia1}</p>
                            <p id="estado"> {weather_day1}</p>
                        </div>
                        <div id="caja-temp-dia"><p>{tempe_maxday1} /{tempe_minday1}</p></div>
                    </div>
                </label>
                <label>
                    <div className="cajas-forecast">
                        <img id="icono" src={iconday1} alt="icono"/>
                        <div id="cajas-dias">
                            <p id="dias">{nombreDia2}</p>
                            <p id="estado">{weather_day2}</p>
                        </div>
                        <div id="caja-temp-dia">
                            <p >{tempe_maxday2} /{tempe_minday2}</p>
                        </div>
                    </div>
                </label>
                <label>
                    <div className="cajas-forecast">
                        <img id="icono" src={iconday1} alt="icono"/>
                        <div id="cajas-dias">
                            <p id="dias">{nombreDia3}</p>
                            <p id="estado">{weather_day3}</p>
                        </div><div id="caja-temp-dia">
                            <p >{tempe_maxday3} /{tempe_minday3}</p>
                        </div>
                    </div>
                </label>
            </div>
        );
    }
}

export default Forecast;