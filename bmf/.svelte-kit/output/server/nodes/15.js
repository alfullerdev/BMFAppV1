import * as universal from '../entries/pages/authentication/_slug_/_page.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/authentication/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/authentication/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/15.Bcv6f61z.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/dynamic-import-helper.BheWnx7M.js","_app/immutable/chunks/scheduler.CMTcs5Ms.js","_app/immutable/chunks/index.IZmjP1Gl.js"];
export const stylesheets = [];
export const fonts = [];
