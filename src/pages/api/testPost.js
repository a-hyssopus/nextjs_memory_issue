import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function handler(
    req,
    res
) {
    if (req.method === 'POST') {
        res.redirect('https://jsonplaceholder.typicode.com/posts');
    }
    const proxyOptions = {
        changeOrigin: true,
        target: 'https://jsonplaceholder.typicode.com/posts',
        pathRewrite: [{ patternStr: '/api/testPost', replaceStr: '' }]
    };

    await httpProxyMiddleware(req, res, proxyOptions);
}
