// src/app/config/db.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import {
        table,
        integer,
        text,
        primaryKey,
        notNull,
        defaultValue,
        unique,
        references,
    } from '@je-es/server';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    // export const todos = table('todos', [
    //     primaryKey(integer('id'), true),
    //     notNull(text('title')),
    //     text('text'),
    //     defaultValue(text('created_at'), new Date().toISOString())
    // ]);

// ╚══════════════════════════════════════════════════════════════════════════════════════╝