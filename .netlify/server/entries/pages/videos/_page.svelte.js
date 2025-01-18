import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".videos.svelte-11pbphv.svelte-11pbphv{display:grid;grid-template-columns:repeat(auto-fit, minmax(600px, 1fr));gap:2rem;margin:2rem 0}.video.svelte-11pbphv.svelte-11pbphv{background:var(--color-bg-1);padding:1rem;border-radius:8px}.video-container.svelte-11pbphv.svelte-11pbphv{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin-bottom:1rem}.video-container.svelte-11pbphv iframe.svelte-11pbphv{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:4px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<svelte:head>\\n\\t<title>Videos - Nicky Saturn</title>\\n\\t<meta name=\\"description\\" content=\\"Watch the latest music videos from Nicky Saturn\\" />\\n</svelte:head>\\n\\n<div class=\\"container\\">\\n\\t<h1>Videos</h1>\\n\\t\\n\\t<div class=\\"videos\\">\\n\\t\\t<div class=\\"video\\">\\n\\t\\t\\t<div class=\\"video-container\\">\\n\\t\\t\\t\\t<iframe\\n\\t\\t\\t\\t\\tsrc=\\"https://www.youtube.com/embed/p_6Bd88TYg4\\"\\n\\t\\t\\t\\t\\ttitle=\\"Time Is Now\\"\\n\\t\\t\\t\\t\\tframeborder=\\"0\\"\\n\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\"\\n\\t\\t\\t\\t\\tallowfullscreen\\n\\t\\t\\t\\t></iframe>\\n\\t\\t\\t</div>\\n\\t\\t\\t<h3>\\"Time Is Now\\"</h3>\\n\\t\\t</div>\\n\\t\\t<div class=\\"video\\">\\n\\t\\t\\t<div class=\\"video-container\\">\\n\\t\\t\\t\\t<iframe\\n\\t\\t\\t\\t\\tsrc=\\"https://www.youtube.com/embed/UYvG9zddJPY\\"\\n\\t\\t\\t\\t\\ttitle=\\"Meant To Be\\"\\n\\t\\t\\t\\t\\tframeborder=\\"0\\"\\n\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\"\\n\\t\\t\\t\\t\\tallowfullscreen\\n\\t\\t\\t\\t></iframe>\\n\\t\\t\\t</div>\\n\\t\\t\\t<h3>\\"Meant To Be\\"</h3>\\n\\t\\t</div>\\n\\t\\t<div class=\\"video\\">\\n\\t\\t\\t<div class=\\"video-container\\">\\n\\t\\t\\t\\t<iframe\\n\\t\\t\\t\\t\\tsrc=\\"https://www.youtube.com/embed/dUnwU-h4-AE\\"\\n\\t\\t\\t\\t\\ttitle=\\"Divine\\"\\n\\t\\t\\t\\t\\tframeborder=\\"0\\"\\n\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\"\\n\\t\\t\\t\\t\\tallowfullscreen\\n\\t\\t\\t\\t></iframe>\\n\\t\\t\\t</div>\\n\\t\\t\\t<h3>\\"Divine\\"</h3>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.videos {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(auto-fit, minmax(600px, 1fr));\\n\\t\\tgap: 2rem;\\n\\t\\tmargin: 2rem 0;\\n\\t}\\n\\n\\t.video {\\n\\t\\tbackground: var(--color-bg-1);\\n\\t\\tpadding: 1rem;\\n\\t\\tborder-radius: 8px;\\n\\t}\\n\\n\\t.video-container {\\n\\t\\tposition: relative;\\n\\t\\tpadding-bottom: 56.25%;\\n\\t\\theight: 0;\\n\\t\\toverflow: hidden;\\n\\t\\tmargin-bottom: 1rem;\\n\\t}\\n\\n\\t.video-container iframe {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tborder-radius: 4px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAiDC,qCAAQ,CACP,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,IAAI,CAAC,CACd,CAEA,oCAAO,CACN,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAChB,CAEA,8CAAiB,CAChB,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,IAChB,CAEA,+BAAgB,CAAC,qBAAO,CACvB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAChB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ox0p2w_START -->${$$result.title = `<title>Videos - Nicky Saturn</title>`, ""}<meta name="description" content="Watch the latest music videos from Nicky Saturn"><!-- HEAD_svelte-1ox0p2w_END -->`, ""} <div class="container" data-svelte-h="svelte-wgy2zr"><h1>Videos</h1> <div class="videos svelte-11pbphv"><div class="video svelte-11pbphv"><div class="video-container svelte-11pbphv"><iframe src="https://www.youtube.com/embed/p_6Bd88TYg4" title="Time Is Now" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="svelte-11pbphv"></iframe></div> <h3>&quot;Time Is Now&quot;</h3></div> <div class="video svelte-11pbphv"><div class="video-container svelte-11pbphv"><iframe src="https://www.youtube.com/embed/UYvG9zddJPY" title="Meant To Be" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="svelte-11pbphv"></iframe></div> <h3>&quot;Meant To Be&quot;</h3></div> <div class="video svelte-11pbphv"><div class="video-container svelte-11pbphv"><iframe src="https://www.youtube.com/embed/dUnwU-h4-AE" title="Divine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="svelte-11pbphv"></iframe></div> <h3>&quot;Divine&quot;</h3></div></div> </div>`;
});
export {
  Page as default
};
