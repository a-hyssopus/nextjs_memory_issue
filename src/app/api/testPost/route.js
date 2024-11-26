import httpProxyMiddleware from "next-http-proxy-middleware";
import {NextResponse} from "next/server";

export const config = {
    api: {
        bodyParser: false,
    },
}

export async function POST(
    req
) {
    // res.redirect('https://jsonplaceholder.typicode.com/posts');
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const body = await req.json();

    const response = await fetch(URL, {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
    })

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });

    // const proxyOptions = {
    //     changeOrigin: true,
    //     target: 'https://jsonplaceholder.typicode.com/posts',
    //     pathRewrite: [{ patternStr: '/api/testPost', replaceStr: '' }]
    // };

    // await httpProxyMiddleware(req, res, proxyOptions);
}
