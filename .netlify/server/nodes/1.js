

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D0xfjJMi.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CfjM94vJ.js","_app/immutable/chunks/stores.BdFD8sI5.js","_app/immutable/chunks/entry.D6GGitZY.js"];
export const stylesheets = [];
export const fonts = [];
