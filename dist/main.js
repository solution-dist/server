#!/usr/bin/env bun
import {server}from'@je-es/server';var t=server({port:process.env.PORT||3e3,routes:[{method:"GET",path:"/",handler:r=>r.html("<h1>Hello World!</h1>")}]});t.start();//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map