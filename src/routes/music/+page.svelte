<svelte:head>
	<title>Music - Nicky Saturn</title>
	<meta name="description" content="Listen to the latest music from Nicky Saturn" />
</svelte:head>

<div class="container">
	<h1>Music</h1>
	
	<div class="albums">
		<div class="album">
			<!-- Spotify Embed -->
			<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/4qqgNsnTVsVq4o386eRAja?utm_source=generator&theme=0" width="100%" height="450" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
			
			<a href="https://spotify.com" target="_blank" rel="noopener noreferrer" class="stream-button">
				Stream on Spotify
			</a>
		</div>
		<div class="album">
			<!-- Apple Music Embed (Direct iframe) -->
			<iframe src="https://embed.music.apple.com/us/artist/nicky-saturn/1573096259" width="100%" height="450" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" loading="lazy"></iframe>
		
			<a href="https://music.apple.com/us/artist/nicky-saturn/1573096259" target="_blank" rel="noopener noreferrer" class="stream-button">
				Stream on Apple Music
			</a>
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

	.album img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 4px;
		margin-bottom: 1rem;
	}

	.stream-button {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: var(--color-theme-1);
		color: white;
		border-radius: 4px;
		margin-top: 1rem;
		text-decoration: none;
	}

	.stream-button:hover {
		background-color: #1a7ba1;
		color: white;
	}

	@media (max-width: 768px) {
		.albums {
			grid-template-columns: 1fr;
			padding: 0 1rem;
		}
	}
</style>
