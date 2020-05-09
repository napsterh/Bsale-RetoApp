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
                    <div className="card card-body card-info mt-3">
                        <p>
                            Ubicación: {props.ciudad}, {props.pais}
                        </p>
                        <p>
                            Temperatura: {props.temperatura} °C
                        </p>
                        <p>
                            Fecha: {props.fecha}
                        </p>
                    </div>
                :
                <div className="card card-body mt-3">

                </div>
            }
        </div>
    )
}

export default InfoClima;