// src/core/server.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { server as createServer }   from '@je-es/server';
    import { config }                   from '../config/server';
    import { routes }                   from '../routes/server';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝


// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    // create
    export const server = createServer({ ...config, routes });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝