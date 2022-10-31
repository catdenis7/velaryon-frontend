import React from 'react'

export default function(props) {
    return (
        <div className="row" style={{ display: 'flex' }}>
            <h5>{props.index + 1}. Contacto - {new Date(props.data.date).toLocaleString()}</h5>
        </div>
    );
}
