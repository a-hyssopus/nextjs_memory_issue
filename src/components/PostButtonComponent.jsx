// pages/index.tsx
import React, { useEffect, useState } from 'react';

export default function PostButtonComponent() {
    const handler = () => {
        fetch('/api/testPost', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <>
        <div>
            <h1>Pokemon Data</h1>
            {pokemon ? (
                <div>
                    <p>Name: {pokemon.name}</p>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <button onClick={handler}>Send POST request</button>
            </>
    );
}
