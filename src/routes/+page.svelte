<script>
    import artistImage1 from '$lib/images/time.jpg';
    import artistImage2 from '$lib/images/soak.jpg';
    import artistImage3 from '$lib/images/meant.jpg';
    import artistImage4 from '$lib/images/divine.jpg';

    // Array of images for the slideshow
    const images = [artistImage1, artistImage2, artistImage3, artistImage4];

    // Variables to track the current and next images
    let currentImageIndex = 0;
    let currentImage = images[currentImageIndex];
    let nextImage = images[(currentImageIndex + 1) % images.length];

    // Trigger to show the fade effect
    let fading = false;

    // Function to update images and trigger fade
    function startSlideshow() {
        setInterval(() => {
            fading = true;

            // Wait for fade-out animation to finish
            setTimeout(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                currentImage = images[currentImageIndex];
                nextImage = images[(currentImageIndex + 1) % images.length];
                fading = false;
            }, 1000); // Duration of fade transition
        }, 5000); // Interval for changing images
    }

    startSlideshow();
</script>

<svelte:head>
    <title>Nicky Saturn - Official Website</title>
    <meta name="description" content="Official website of Nicky Saturn" />
</svelte:head>

<section class="hero">
    <!-- Background layers for fade transition -->
    <div
        class="background current"
        style={`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentImage})`}
    ></div>
    <div
        class="background next"
        style={`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nextImage}); opacity: ${fading ? 1 : 0}`}
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

    .current {
        z-index: 1;
    }

    .next {
        z-index: 2;
        opacity: 0;
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
