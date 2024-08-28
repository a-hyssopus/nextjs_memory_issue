import React from "react";

export default function NormalRequestButton() {
    const sendNormalRequest = () => {
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
        <button onClick={sendNormalRequest}>Send POST request of normal size</button>
    )
}