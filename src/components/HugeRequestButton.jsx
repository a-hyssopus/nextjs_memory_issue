import React from 'react';

import {generateHugePayload} from "../helpers/generateHugePayload";

const hugePayload = generateHugePayload();

export default function HugeRequestButton() {
    const sendHugeRequest = () => {
        fetch('/api/testPost', {
            method: 'POST',
            body: JSON.stringify(hugePayload),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
    }

    return (
        <button onClick={sendHugeRequest}>Send POST request of huge size</button>
    )
}
