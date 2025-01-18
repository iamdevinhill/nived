

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tour/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Dmxe8xwk.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CfjM94vJ.js"];
export const stylesheets = ["_app/immutable/assets/6.DjxKeZA4.css"];
export const fonts = [];
