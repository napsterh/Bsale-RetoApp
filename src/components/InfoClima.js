import React  from 'react';

const InfoClima = props => {

    console.log(props)

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
                        <div>
                            <h2><i className="fas fa-clock fa-1x"></i> {props.fecha}</h2>
                        </div>
                        <div>
                            <h2><i className="fas fa-wind fa-1x"></i> {props.vel_viento}</h2>
                        </div>
                        <div>
                            <h2><i className="fas fa-cloud fa-1x"></i> {props.descripcion}</h2>
                        </div>
                        <div>
                            <h1><i className="fas fa-temperature-low fa-1x"></i> {props.temperatura} °C</h1>
                        </div>
                        <div>
                            <h2><i className="fas fa-location-arrow fa-1x"></i> {props.ciudad}, {props.pais}</h2>
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