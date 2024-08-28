This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running app in Docker locally

```bash
docker build -t memory_repo .
```
and then

```bash
docker run -p 3000:3000 memory_repo
```

## Issue reproduction

Open [http://localhost:3000](http://localhost:3000) with your browser. Type `docker stats` in a new terminal tab.

Click the "Send POST request of normal size" button in application. Observe the behaviour of stats in the tab which tracks Docker, and pay attention to the memory consumption.

Then click "Send POST request of huge size" button, observe memory usage in Docker stats.

## Issue

Memory is bloated from 50-70 up to 900+ MB. 

It happens even when `middleware.ts` file is present with no logic which would read `request.body` or do anything but log `xd` and return the `NextResponse.next()` inside.

## All tested scenarios and results

1. Reproduction created with API route (with `getOnProxyInit`) and middleware: hits 940 MB with a 400 MB request sent, and although error was returned from server, precisely HTTP 413, the memory consumption doesn't decrease at all
2. Removed `getOnProxyInit`: the same situation as above
3. Removed `getOnProxyInit` file as well: hits 940 MB, but gets back to normal values fast
4. Removed `middleware.ts`: memory consumption doesn't raise at all
5. Commented out API route, but restored `middleware.ts`: doesn't raise at all
6. Restored API route with `bodyParser: false`: the same as in 1 and 2


