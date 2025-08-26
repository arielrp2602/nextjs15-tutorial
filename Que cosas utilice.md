Que cosas utilice:
- Shadcdn para componentes
- - Los componentes que vaya utilizando se instalan uno por utilizando
- - Tienen la función buttonVariants que me permite aplicar estilos de botones a componentes que no necesariamente son de Shadcdn

- Kinde Auth para autenticación
- - Tiene componentes para login y logout
- - Tiene funciones para obtener el usuario en el servidor y en el cliente
- - En el servidor se usa getKindeServerSession
- - En el cliente se usa useKindeBrowserClient
- - Ya que se tiene la URL de vercel, se actualizan sus variables de entorno en su propio sitio, ejemplos:
# LAS SIGUIENTES SE ACTUALIZAN EN VERCEL, EN LUGAR DE HTTP LOCALHOST SE PONE LA DIRECCION DE VERCEL, EJ https://nextjs15-tutorial-flax.vercel.app/
KINDE_SITE_URL=http://localhost:3000 #SE ACTUALIZA EN VERCEL, QUITAR DIAGONAL AL FINAL
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000 #SE ACTUALIZA EN VERCEL, QUITAR DIAGONAL AL FINAL
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard #SE ACTUALIZA EN VERCEL, QUITAR DIAGONAL AL FINAL, EJ https://nextjs15-tutorial-flax.vercel.app/dashboard

- Vercel para deploy
- - Se conecta con el repositorio de github
- - Se actualizan las variables de entorno en su sitio (las que están en la sección de Kinde Auth)
- - Se hace deploy automático al hacer push a main
- - Se obtiene la URL del sitio 

- Prisma para base de datos
- - Se instala prisma y el cliente de prisma
- - Se inicializa prisma con npx prisma init
- - Se crea definen las tablas en el archivo schema.prisma
- - Se crea la base de datos con npx prisma db push
- - Se crea un script en package.json para poblar la base de datos con node prisma/seed.js
- - Se instala @prisma/client para poder usar prisma en el código
- - Se crea una función en lib/prisma.ts para exportar el cliente de prisma y usarlo en el código
- - Prisma studio permite ver la base de datos de manera local
- - No olvidar agregar comando "postinstall" en package.json para que prisma genere el cliente al hacer deploy en vercel

- Neon => Neon Serverless Postgres para base de datos en la nube
- - Se crea una cuenta en neon.tech
- - Se crea una base de datos y se obtiene la URL de conexión
- - Se actualiza la variable de entorno DATABASE_URL con la URL de conexión de neon

https://vercel.com/ariel-ramirezs-projects/nextjs15-tutorial
https://console.neon.tech/app/org-snowy-math-94917146/projects
https://nextjs15-tutorial-flax.vercel.app/
