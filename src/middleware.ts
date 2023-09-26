import { geolocation } from '@vercel/edge';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// run only on homepage
export const config = {
  matcher: ['/'],
};

export const runtime = 'experimental-edge';

export async function middleware(req: NextRequest) {
  const { nextUrl: url } = req;
  let { city } = geolocation(req);

  if (typeof city !== 'string') {
    city = '';
  }

  url.searchParams.set('city', city);

  return NextResponse.rewrite(url);
}
