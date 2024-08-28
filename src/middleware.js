// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log('xd');
    return NextResponse.next();
}
