import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.Cr1sQPvz.js","_app/immutable/chunks/scheduler.CMTcs5Ms.js","_app/immutable/chunks/index.IZmjP1Gl.js"];
export const stylesheets = [];
export const fonts = [];
