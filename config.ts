/* eslint-disable max-len, no-console */
import { ClientRequest, IncomingMessage, ServerResponse } from 'http';
import Server from 'http-proxy';
import { NextApiRequest } from 'next';

export function onProxyReq() {
    return (
        proxyReq: ClientRequest,
        req: IncomingMessage,
        res: ServerResponse
    ) => {
        console.log('onProxyReq')
    };
}

export const onError = (
    err: Error,
    req: IncomingMessage,
    { end, headersSent, writeHead }: ServerResponse
) => {
    const host = req.headers && req.headers.host;
    if (writeHead && !headersSent)
        writeHead(500, { 'Content-Type': 'text/plain' });

    console.log(`proxyError: ${err}`);

    // @ts-ignore
    end(` (${err.code}) Proxy error: Could not proxy request: ${req.url}
    From ${host} to ${req.url}
  `);
};

export async function getOnProxyInit(
    req: NextApiRequest
) {
    return (proxy: Server) => {
        proxy.on('proxyReq', onProxyReq());
        proxy.on('error', onError);
    };
}
