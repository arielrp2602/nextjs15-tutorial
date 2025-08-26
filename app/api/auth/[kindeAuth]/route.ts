/*
    Este archivo es el que hace la conexión entre Kinde Auth y la aplicación Next.js
    No es necesario modificarlo, solo se deja así
*/

import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';

export const GET = handleAuth();
