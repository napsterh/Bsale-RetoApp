import React from 'react';

const FormClima = props => (
    <div className="card card-search card-body container">
        <form onSubmit={props.obtenerClima} className="row col-12">
                <div className="form-group col-9 m-0">
                    <input type="text" name="ciudad" placeholder="Ingresa una ciudad" className="form-control" autoFocus/>
                </div>
                <div className="col-3 m-0">
                    <button className="btn btn-primary btn-block btn-search"><i className="fas fa-search fa-1x"></i></button>
                </div>
        </form>
    </div>
);

export default FormClima;