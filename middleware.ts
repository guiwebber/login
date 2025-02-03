// middleware.ts (para TypeScript) ou middleware.js (para JavaScript)
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  // Verifica se a requisição é para a raiz do site
  if (request.url.endsWith('/')) {
    return NextResponse.redirect(new URL('/login', request.url)); // Redireciona para /login
  }
  
  return NextResponse.next(); // Caso contrário, continua com a requisição normal
}

// Configuração para o middleware ser executado em todas as rotas
export const config = {
  matcher: '/', // Aplica o middleware apenas para a página inicial
};
