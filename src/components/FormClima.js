import React from 'react';

const FormClima = props => (
    <div className="card card-body">
        <form onSubmit={props.obtenerClima}>
            <div className="form-group">
                <input type="text" name="ciudad" placeholder="Ingresa una ciudad" className="form-control" autoFocus/>
            </div>
            <button className="btn btn-primary btn-block">
                Obtener Clima
            </button>
        </form>
    </div>
);

export default FormClima;