import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from './config/routes';
import { getToken } from 'next-auth/jwt';

const withAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  if (!token) {
    url.pathname = routes.signIn;
    url.search = `callbackUrl=${pathname}`;

    return NextResponse.redirect(url);
  }
};

const FALLBACK_URL = '/';
const withOutAuth = async (
  req: NextRequest,
  token: boolean,
  to: string | null
) => {
  const url = req.nextUrl.clone();

  if (token) {
    url.pathname = to ?? FALLBACK_URL;
    url.search = '';

    return NextResponse.redirect(url);
  }
};

const withAuthList = [routes.cart, routes.mypage];
const withOutAuthList = [routes.signIn];

export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const accessToken = token?.accessToken;
  const { searchParams } = request.nextUrl;
  const callbackUrl = searchParams.get('callbackUrl');
  const { pathname } = request.nextUrl;
  const isWithAuth = withAuthList.includes(pathname);
  const isWithOutAuth = withOutAuthList.includes(pathname);

  if (isWithAuth) return withAuth(request, !!accessToken);
  else if (isWithOutAuth)
    return withOutAuth(request, !!accessToken, callbackUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};
