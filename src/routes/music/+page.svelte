<svelte:head>
    <title>Music - NIVED</title>
    <meta name="description" content="Listen to the latest music from NIVED" />
</svelte:head>

<div class="container">
    <h1>Music</h1>
    
    <div class="albums">
        <div class="album">
            <!-- Spotify Embed -->
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3DtwipRpa95h0QwC3YliKK?utm_source=generator&theme=0" width="100%" height="450" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>            
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" class="stream-button">
                Stream on Spotify
            </a>
        </div>
        <div class="album">
            <!-- Apple Music Embed -->
            <iframe src="https://embed.music.apple.com/us/artist/nived/1452705667" width="100%" height="450" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" loading="lazy"></iframe>
            <a href="https://music.apple.com/us/artist/nived/1452705667" target="_blank" rel="noopener noreferrer" class="stream-button">
                Stream on Apple Music
            </a>
        </div>
    </div>

    <div class="production-credits">
        <h2>Production Credits</h2>
        <div class="credits-grid">
            <div class="album">
                <!-- SoundCloud Embed -->
                <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dangerousthomas&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <a href="https://soundcloud.com/dangerousthomas" target="_blank" rel="noopener noreferrer" class="stream-button">
                    Stream on SoundCloud
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .albums {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }

    .album {
        text-align: center;
        padding: 1rem;
        background: var(--color-bg-1);
        border-radius: 8px;
    }

    .stream-button {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: var(--color-bg-0);
        color: white;
        border-radius: 4px;
        margin-top: 1rem;
        text-decoration: none;
    }

    .stream-button:hover {
		background-color: #0a0a0a;
        color: white;
    }

    .production-credits {
        margin-top: 4rem;
    }

    .production-credits h2 {
        text-align: center;
        margin-bottom: 2rem;
    }

    .credits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    @media (max-width: 768px) {
        .albums {
            grid-template-columns: 1fr;
            padding: 0 1rem;
        }
        
        .credits-grid {
            grid-template-columns: 1fr;
        }
    }
</style>