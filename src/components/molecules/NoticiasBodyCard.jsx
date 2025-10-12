import React from 'react';

function NoticiasBodyCard({ titulo, fecha, contenido }) {
    return (
        <>
            <h5 className="card-title">{titulo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Fecha: {fecha}</h6>
            <p className="card-text">{contenido}</p>
        </>
    );
}

export default NoticiasBodyCard;