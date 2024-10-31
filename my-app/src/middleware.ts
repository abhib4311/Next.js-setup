import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get('token')?.value;
    const publicPaths = ['/login', '/signup'];

    // Redirect logged-in users from public paths to /home
    if (publicPaths.includes(path) && token) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    // Redirect non-authenticated users trying to access non-public paths to /login
    if (!publicPaths.includes(path) && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/:path*', '/login', '/signup', '/home/:path*', '/profile', '/course/:path*', '/admin/:path*'],
};
