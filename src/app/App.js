import React, { Component } from 'react';

import InfoClima from '../components/InfoClima';
import FormClima from '../components/FormClima';


import { OPENWEATHER_KEY } from './keys';

class App extends Component {

    state = {
        temperatura: '',
        sensacion_term: '',
        temperatura_min: '',
        icon: null,
        descripcion: '',
        humedad: '',
        vel_viento: 0,
        ciudad: '',
        pais: '',
        error: null,
        message: null
    };

    climaIcon = {
        Thunderstorm: "bolt",
        Drizzle: "cloud-rain",
        Rain: "cloud-showers-heavy",
        Snow: "snowflake",
        Atmosphere: "cloud",
        Clear: "cloud-sun",
        Clouds: "cloud"
    };

    obtener_iconClima(icons, rangeId){
        switch (true) {
            case rangeId >= 200 && rangeId < 232:
              this.setState({ icon: icons.Thunderstorm });
              break;
            case rangeId >= 300 && rangeId <= 321:
              this.setState({ icon: icons.Drizzle });
              break;
            case rangeId >= 500 && rangeId <= 521:
              this.setState({ icon: icons.Rain });
              break;
            case rangeId >= 600 && rangeId <= 622:
              this.setState({ icon: icons.Snow });
              break;
            case rangeId >= 701 && rangeId <= 781:
              this.setState({ icon: icons.Atmosphere });
              break;
            case rangeId === 800:
              this.setState({ icon: icons.Clear });
              break;
            case rangeId >= 801 && rangeId <= 804:
              this.setState({ icon: icons.Clouds });
              break;
            default:
              this.setState({ icon: icons.Clouds });
        }
    };


     obtenerClima = async  e =>{
         e.preventDefault();
        const { ciudad } = e.target.elements;
        const valorCiudad = ciudad.value;
        const protocolo = location.protocol;

        if(valorCiudad){

            const API_OPENWEATHER =  `${protocolo}//api.openweathermap.org/data/2.5/weather?q=${valorCiudad}&appid=${OPENWEATHER_KEY}&units=metric`;

            const response = await fetch(API_OPENWEATHER);
            const data = await response.json();

            if(data.message === 'city not found'){
                this.setState({
                    message: 'Ciudad no encontrada'
                })
            }

        this.setState({
            temperatura: data.main.temp,
            sensacion_term: data.main.feels_like,
            temperatura_min: data.main.temp_min,
            descripcion: data.weather[0].description,
            humedad: data.main.humidity,
            vel_viento: data.wind.speed,
            ciudad: data.name,
            pais: data.sys.country,
            error: null,
            message: null
        });

        //config icon
        this.obtener_iconClima(this.climaIcon, data.weather[0].id);

        } else {
            this.setState({
                error: 'Ingrese una ciudad'
            });
        }
     };

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <FormClima obtenerClima={this.obtenerClima}/>
                        <InfoClima 
                            temperatura={this.state.temperatura}
                            sensacion_term={this.state.sensacion_term}
                            temperatura_min={this.state.temperatura_min}
                            weatherIcon={this.state.icon}
                            descripcion={this.state.descripcion}
                            humedad={this.state.humedad}
                            vel_viento={this.state.vel_viento}
                            ciudad={this.state.ciudad}
                            pais={this.state.pais}
                            error={this.state.error}
                            message={this.state.message}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

