import { NextResponse } from 'next/server';

export const config = {
    matcher: ['/', '/dashboard'],
};

export const middleware = (req) => {
    const verifyCookie = req.cookies.get('uid');
    const url = req.url;

    if (verifyCookie === undefined && url === 'http://localhost:3000/') {
        return;
    }

    if (verifyCookie === undefined && url.includes('/dashboard')) {
        return NextResponse.redirect('http://localhost:3000/');
    }

    if (verifyCookie.value && url === 'http://localhost:3000/') {
        return NextResponse.redirect('http://localhost:3000/dashboard');
    }
};
