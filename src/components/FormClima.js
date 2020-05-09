import React from 'react';

const FormClima = props => (
    <div className="card card-body container mt-5">
        <form onSubmit={props.obtenerClima} className="row col-12">
                <div className="form-group col-10 m-0">
                    <input type="text" name="ciudad" placeholder="Ingresa una ciudad" className="form-control" autoFocus/>
                </div>
                <div className="col-2 m-0">
                    <button className="btn btn-primary btn-block"><i className="fas fa-search fa-1x"></i></button>
                </div>
        </form>
    </div>
);

export default FormClima;