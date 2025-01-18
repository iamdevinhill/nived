

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.C7q7AMOq.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CfjM94vJ.js"];
export const stylesheets = ["_app/immutable/assets/7.ZfyK-cts.css"];
export const fonts = [];
