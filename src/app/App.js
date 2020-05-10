import React, { Component } from 'react';

import InfoClima from '../components/InfoClima';
import FormClima from '../components/FormClima';

import { OPENWEATHER_KEY } from './keys';

class App extends Component {

    state = {
        temperatura: '',
        descripcion: '',
        humedad: '',
        vel_viento: 0,
        ciudad: '',
        pais: '',
        error: null,
        fecha: ''
    };


     obtenerClima = async  e =>{
         e.preventDefault();
        const { ciudad } = e.target.elements;
        const valorCiudad = ciudad.value;

        if(valorCiudad){
            const API_OPENWEATHER =  `http://api.openweathermap.org/data/2.5/weather?q=${valorCiudad}&appid=${OPENWEATHER_KEY}&units=metric`;

            const response = await fetch(API_OPENWEATHER);
            const data = await response.json();

            const date = new Date();
            console.log(date);
            let mes = date.getMonth()+1;
            let dia = date.getDate();
            let hora = date.getHours();
            let minuto = date.getMinutes();
            let anio = date.getFullYear();

        this.setState({
            temperatura: data.main.temp,
            sensacion_term: data.main.feels_like,
            temperatura_min: data.main.temp_min,
            descripcion: data.weather[0].description,
            humedad: data.main.humidity,
            vel_viento: data.wind.speed,
            ciudad: data.name,
            pais: data.sys.country,
            error: null
        });
        } else {
            this.setState({
                error: 'Ingrese una ciudad válida'
            });
        }
     }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <FormClima obtenerClima={this.obtenerClima}/>
                        <InfoClima temperatura {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

