import React from 'react'

export default function(props) {
    let data = props.props;
    return (
        <div>
            <div className="row align-items-center" style={{ display: 'flex' }}>
                <div>
                    <span style={{ fontWeight: "bold" }}>Enviado por: </span>
                    <span>{data.contactMethod.description}</span>
                    <br></br>
                    <span style={{ fontWeight: "bold" }}>Medio: </span>
                    <span>{data.contactMethod.description}</span>
                    <br></br>
                    <span style={{ fontWeight: "bold" }}>Mensaje Enviado: </span>
                    <span>{data.message}</span>
                    <br></br>
                    <span style={{ fontWeight: "bold" }}>Respuesta: </span>
                    <span>{data.response}</span>
                </div>
            </div>
        </div>
    );
}
