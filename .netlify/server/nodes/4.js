

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BOdP_OSX.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CfjM94vJ.js"];
export const stylesheets = ["_app/immutable/assets/4.C_JlNCtc.css"];
export const fonts = [];
