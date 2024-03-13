import React from 'react';

export default function MyComponent({ api }) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{api.API}</h5>
                    <p className="card-text">Kategorie: {api.Category}</p>
                    <p className="card-text">Beschreibung: {api.Description}</p>
                    <p className="card-text">Auth: {api.Auth ? api.Auth : "offen"}</p>
                    <button className="btn btn-primary">Mehr Info</button>
                </div>
            </div>
        </div>
    );
};

