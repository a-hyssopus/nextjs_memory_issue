import {getOnProxyInit} from "../../../config";
import httpProxyMiddleware from "next-http-proxy-middleware";

export default async function handler(
    req,
    res
) {
    const onProxyInit = await getOnProxyInit(req);

    const proxyOptions = {
        onProxyInit,
        changeOrigin: true,
        target: 'https://jsonplaceholder.typicode.com/posts',
        pathRewrite: [{ patternStr: '/api/testPost', replaceStr: '' }]
    };

    await httpProxyMiddleware(req, res, proxyOptions);
}
