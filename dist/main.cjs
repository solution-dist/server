#!/usr/bin/env bun
'use strict';var server=require('@je-es/server');var t=server.server({port:process.env.PORT||3e3,routes:[{method:"GET",path:"/",handler:r=>r.html("<h1>Hello World!</h1>")}]});t.start();//# sourceMappingURL=main.cjs.map
//# sourceMappingURL=main.cjs.map