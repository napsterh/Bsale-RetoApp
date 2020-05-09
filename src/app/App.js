import React, { Component } from 'react';
import InfoClima from '../components/InfoClima';
import FormClima from '../components/FormClima';
import { OPENWEATHER_KEY } from './keys';

class App extends Component {

    state = {
        temperatura: '',
        descripcion: '',
        humedad: '',
        vel_viento: '',
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
        //console.log(this.state);


        this.setState({
            temperatura: data.main.temp,
            descripcion: data.weather[0].description,
            humedad: data.main.humidity,
            vel_viento: data.wind.speed,
            ciudad: data.name,
            pais: data.sys.country,
            fecha: Date(),
        });

        } else {
            this.setState({error: 'Ingrese una ciudad válida'})
        }

     }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <FormClima obtenerClima={this.obtenerClima}/>
                        <InfoClima temperatura {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

