// proxy.ts
import { auth } from "@/auth";

// Export the 'auth' function as the DEFAULT export
export default auth(async (req) => {
  // Your authentication logic here
  // e.g., redirect protected routes if req.auth is null
  // return NextResponse.redirect(new URL('/signin', req.url));
  
  // If no redirect is needed, just return nothing or NextResponse.next()
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)', '/api/:path*'],
};