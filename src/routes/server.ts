// src/app/config/routes/server.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { RouteDefinition, type AppContext } from '@je-es/server';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    export const routes : RouteDefinition[] = [
        {
            method  : 'GET',
            path    : '/',
            handler: (c: AppContext) => {
                return c.json({ message: 'Hello World!' });
            }
        },

    ];

// ╚══════════════════════════════════════════════════════════════════════════════════════╝