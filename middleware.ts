import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'pt-BR'],
  defaultLocale: 'pt-BR'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};