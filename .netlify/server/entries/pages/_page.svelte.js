import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const artistImage1 = "/_app/immutable/assets/time.DGerwdja.jpg";
const artistImage2 = "/_app/immutable/assets/soak.Dh7UdlRC.jpg";
const artistImage3 = "/_app/immutable/assets/meant.D16CEgLi.jpg";
const artistImage4 = "/_app/immutable/assets/divine.D_55F0HZ.jpg";
const css = {
  code: ".hero.svelte-11twxro{height:calc(100vh - 5rem);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center;color:white}.background.svelte-11twxro{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:center;transition:opacity 1s ease-in-out}.current.svelte-11twxro{z-index:1}.next.svelte-11twxro{z-index:2;opacity:0}.hero-content.svelte-11twxro{position:relative;z-index:3;padding:2rem}h1.svelte-11twxro{font-size:4rem;margin:0;letter-spacing:0.2em}.tagline.svelte-11twxro{font-size:1.5rem;margin:1rem 0 2rem}.cta-button.svelte-11twxro{display:inline-block;padding:1rem 2rem;background-color:var(--color-theme-1);color:white;border-radius:4px;font-weight:bold;text-transform:uppercase;letter-spacing:0.1em;transition:background-color 0.2s}.cta-button.svelte-11twxro:hover{background-color:#1a7ba1;color:white}@media(max-width: 768px){h1.svelte-11twxro{font-size:2.5rem}.tagline.svelte-11twxro{font-size:1.2rem}.cta-button.svelte-11twxro{padding:0.8rem 1.5rem;font-size:0.9rem}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import artistImage1 from '$lib/images/time.jpg';\\n    import artistImage2 from '$lib/images/soak.jpg';\\n    import artistImage3 from '$lib/images/meant.jpg';\\n    import artistImage4 from '$lib/images/divine.jpg';\\n\\n    // Array of images for the slideshow\\n    const images = [artistImage1, artistImage2, artistImage3, artistImage4];\\n\\n    // Variables to track the current and next images\\n    let currentImageIndex = 0;\\n    let currentImage = images[currentImageIndex];\\n    let nextImage = images[(currentImageIndex + 1) % images.length];\\n\\n    // Trigger to show the fade effect\\n    let fading = false;\\n\\n    // Function to update images and trigger fade\\n    function startSlideshow() {\\n        setInterval(() => {\\n            fading = true;\\n\\n            // Wait for fade-out animation to finish\\n            setTimeout(() => {\\n                currentImageIndex = (currentImageIndex + 1) % images.length;\\n                currentImage = images[currentImageIndex];\\n                nextImage = images[(currentImageIndex + 1) % images.length];\\n                fading = false;\\n            }, 1000); // Duration of fade transition\\n        }, 5000); // Interval for changing images\\n    }\\n\\n    startSlideshow();\\n<\/script>\\n\\n<svelte:head>\\n    <title>Nicky Saturn - Official Website</title>\\n    <meta name=\\"description\\" content=\\"Official website of Nicky Saturn\\" />\\n</svelte:head>\\n\\n<section class=\\"hero\\">\\n    <!-- Background layers for fade transition -->\\n    <div\\n        class=\\"background current\\"\\n        style={\`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\${currentImage})\`}\\n    ></div>\\n    <div\\n        class=\\"background next\\"\\n        style={\`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\${nextImage}); opacity: \${fading ? 1 : 0}\`}\\n    ></div>\\n\\n    <div class=\\"hero-content\\">\\n        <h1>Nicky Saturn</h1>\\n        <p class=\\"tagline\\">New Single Out Now</p>\\n        <a href=\\"/music\\" class=\\"cta-button\\">Listen Here</a>\\n    </div>\\n</section>\\n\\n<style>\\n    .hero {\\n        height: calc(100vh - 5rem);\\n        position: relative;\\n        overflow: hidden;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        text-align: center;\\n        color: white;\\n    }\\n\\n    .background {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        width: 100%;\\n        height: 100%;\\n        background-size: cover;\\n        background-position: center;\\n        transition: opacity 1s ease-in-out;\\n    }\\n\\n    .current {\\n        z-index: 1;\\n    }\\n\\n    .next {\\n        z-index: 2;\\n        opacity: 0;\\n    }\\n\\n    .hero-content {\\n        position: relative;\\n        z-index: 3;\\n        padding: 2rem;\\n    }\\n\\n    h1 {\\n        font-size: 4rem;\\n        margin: 0;\\n        letter-spacing: 0.2em;\\n    }\\n\\n    .tagline {\\n        font-size: 1.5rem;\\n        margin: 1rem 0 2rem;\\n    }\\n\\n    .cta-button {\\n        display: inline-block;\\n        padding: 1rem 2rem;\\n        background-color: var(--color-theme-1);\\n        color: white;\\n        border-radius: 4px;\\n        font-weight: bold;\\n        text-transform: uppercase;\\n        letter-spacing: 0.1em;\\n        transition: background-color 0.2s;\\n    }\\n\\n    .cta-button:hover {\\n        background-color: #1a7ba1;\\n        color: white;\\n    }\\n\\n    @media (max-width: 768px) {\\n        h1 {\\n            font-size: 2.5rem;\\n        }\\n\\n        .tagline {\\n            font-size: 1.2rem;\\n        }\\n\\n        .cta-button {\\n            padding: 0.8rem 1.5rem;\\n            font-size: 0.9rem;\\n        }\\n    }\\n</style>\\n"],"names":[],"mappings":"AA2DI,oBAAM,CACF,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC1B,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,KACX,CAEA,0BAAY,CACR,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,UAAU,CAAE,OAAO,CAAC,EAAE,CAAC,WAC3B,CAEA,uBAAS,CACL,OAAO,CAAE,CACb,CAEA,oBAAM,CACF,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,CACb,CAEA,4BAAc,CACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IACb,CAEA,iBAAG,CACC,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,KACpB,CAEA,uBAAS,CACL,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IACnB,CAEA,0BAAY,CACR,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,KAAK,CACrB,UAAU,CAAE,gBAAgB,CAAC,IACjC,CAEA,0BAAW,MAAO,CACd,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KACX,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,iBAAG,CACC,SAAS,CAAE,MACf,CAEA,uBAAS,CACL,SAAS,CAAE,MACf,CAEA,0BAAY,CACR,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,SAAS,CAAE,MACf,CACJ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [artistImage1, artistImage2, artistImage3, artistImage4];
  let currentImageIndex = 0;
  let currentImage = images[currentImageIndex];
  let nextImage = images[(currentImageIndex + 1) % images.length];
  let fading = false;
  function startSlideshow() {
    setInterval(
      () => {
        fading = true;
        setTimeout(
          () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            currentImage = images[currentImageIndex];
            nextImage = images[(currentImageIndex + 1) % images.length];
            fading = false;
          },
          1e3
        );
      },
      5e3
    );
  }
  startSlideshow();
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-p4awdj_START -->${$$result.title = `<title>Nicky Saturn - Official Website</title>`, ""}<meta name="description" content="Official website of Nicky Saturn"><!-- HEAD_svelte-p4awdj_END -->`, ""} <section class="hero svelte-11twxro"> <div class="background current svelte-11twxro"${add_attribute("style", `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentImage})`, 0)}></div> <div class="background next svelte-11twxro"${add_attribute("style", `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nextImage}); opacity: ${fading ? 1 : 0}`, 0)}></div> <div class="hero-content svelte-11twxro" data-svelte-h="svelte-zvutmb"><h1 class="svelte-11twxro">Nicky Saturn</h1> <p class="tagline svelte-11twxro">New Single Out Now</p> <a href="/music" class="cta-button svelte-11twxro">Listen Here</a></div> </section>`;
});
export {
  Page as default
};
