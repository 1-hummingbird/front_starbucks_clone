import { NextRequest, NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';
import { routes } from './config/routes';

const withAuthList = [routes.cart, routes.mypage];
const withOutAuthList = [routes.signIn];
const FALLBACK_URL = '/';

const withAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  if (!token) {
    url.pathname = routes.signIn;
    url.search = `callbackUrl=${pathname}`;

    return NextResponse.redirect(url);
  }
};

const withOutAuth = async (
  req: NextRequest,
  token: boolean,
  to: string | null,
) => {
  const url = req.nextUrl.clone();

  if (token) {
    url.pathname = to ?? FALLBACK_URL;
    url.search = '';

    return NextResponse.redirect(url);
  }
};

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const accessToken = token?.accessToken;
  const { searchParams } = req.nextUrl;
  const callbackUrl = searchParams.get('callbackUrl');
  const { pathname } = req.nextUrl;
  const isWithAuth = withAuthList.includes(pathname);
  const isWithOutAuth = withOutAuthList.includes(pathname);

  if (isWithAuth) {
    return withAuth(req, !!accessToken);
  } else if (isWithOutAuth) {
    return withOutAuth(req, !!accessToken, callbackUrl);
  }
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};
