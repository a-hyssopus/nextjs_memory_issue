export function onProxyReq() {
    return (
        proxyReq,
        req,
        res
    ) => {
        console.log('onProxyReq')
    };
}

export const onError = (
    err,
    req,
    { end }
) => {
    const host = req.headers && req.headers.host;

    console.log(`proxyError: ${err}`);

    end(` (${err.code}) Proxy error: Could not proxy request: ${req.url}
    From ${host} to ${req.url}
  `);
};

export async function getOnProxyInit() {
    return (proxy) => {
        proxy.on('proxyReq', onProxyReq());
        proxy.on('error', onError);
    };
}
