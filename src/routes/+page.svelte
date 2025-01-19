<script>
    import { onMount } from 'svelte';
    import artistImage1 from '$lib/images/time.jpg';
    import artistImage2 from '$lib/images/soak.jpg';
    import artistImage3 from '$lib/images/meant.jpg';
    import artistImage4 from '$lib/images/divine.jpg';

    // Array of images for the slideshow
    const images = [artistImage1, artistImage2, artistImage3, artistImage4];

    // Variables to track the current image
    let currentImageIndex = 0;
    let opacity = 1;
    
    // Function to handle the slideshow
    function startSlideshow() {
        setInterval(() => {
            // Start fade out
            opacity = 0;
            
            // After fade out, change image and fade in
            setTimeout(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                opacity = 1;
            }, 1000); // Match the CSS transition duration
        }, 5000); // Change image every 5 seconds
    }

    onMount(() => {
        startSlideshow();
    });
</script>

<svelte:head>
    <title>Nicky Saturn - Official Website</title>
    <meta name="description" content="Official website of Nicky Saturn" />
</svelte:head>

<section class="hero">
    <div
        class="background"
        style={`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]}); opacity: ${opacity}`}
    ></div>

    <div class="hero-content">
        <h1>Nicky Saturn</h1>
        <p class="tagline">New Single Out Now</p>
        <a href="/music" class="cta-button">Listen Here</a>
    </div>
</section>

<style>
    .hero {
        height: calc(100vh - 5rem);
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: opacity 1s ease-in-out;
    }

    .hero-content {
        position: relative;
        z-index: 3;
        padding: 2rem;
    }

    h1 {
        font-size: 4rem;
        margin: 0;
        letter-spacing: 0.2em;
    }

    .tagline {
        font-size: 1.5rem;
        margin: 1rem 0 2rem;
    }

    .cta-button {
        display: inline-block;
        padding: 1rem 2rem;
        background-color: var(--color-theme-1);
        color: white;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: background-color 0.2s;
    }

    .cta-button:hover {
        background-color: #1a7ba1;
        color: white;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        .tagline {
            font-size: 1.2rem;
        }

        .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
        }
    }
</style>