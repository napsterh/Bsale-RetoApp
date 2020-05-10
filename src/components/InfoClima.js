import React  from 'react';

const InfoClima = props => {

    console.log("infoClima",props)

    return (

        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }

            {
                props.temperatura ?
                        <div className="card card-body card-info animated fadeInUp">
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="fecha col-6" data-toggle="tooltip" data-placement="top" title="Sensación térmica">
                                        <h2><i className="fas fa-temperature-high"></i> {props.sensacion_term}</h2>
                                    </div>
                                    <div className="hora col-4" data-toggle="tooltip" data-placement="top" title="Temperatura mínima">
                                        <h2><i className="fas fa-arrow-down fa-1x"></i> {props.temperatura_min}</h2>
                                    </div>
                                </div>

                                <div className="row justify-content-center" data-toggle="tooltip" data-placement="top" title="Ciudad y país">
                                    <div className="col-6 ciudad-pais">
                                        <h3><i className="fas fa-location-arrow fa-1x"></i> {props.ciudad}, {props.pais}</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center animated flash" data-toggle="tooltip" data-placement="top" title="icono">
                                        <div className="icono">
                                            <h1><i className={`fas fa-${props.weatherIcon} fa-3x`}></i></h1>
                                        </div>
                                </div>

                                <div className="row justify-content-center" data-toggle="tooltip" data-placement="top" title="Temperatura">
                                        <div className="temperatura">
                                            <h1>{props.temperatura} °C</h1>
                                        </div>
                                </div>

                                <div className="row justify-content-between">
                                    <div className="col-6 humedad" data-toggle="tooltip" data-placement="top" title="Humedad">
                                        <h3><i className="fas fa-tint fa-1x"></i> {props.humedad} %</h3>
                                    </div>
                                    <div className="col-6 vel-viento col-auto" data-toggle="tooltip" data-placement="top" title="Velocidad del viento">
                                        <h3><i className="fas fa-wind fa-1x"></i> {props.vel_viento} m/s</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                :
                <div className="card card-body text-center">
                    <i className="fas fa-cloud fa-10x"></i>
                    <h5>Busca el clima de tu ciudad</h5>
                </div>
            }
        </div>
    )
}

export default InfoClima;