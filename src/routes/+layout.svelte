<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-content">
			<div class="social-icons">
				<a href="https://open.spotify.com/artist/3DtwipRpa95h0QwC3YliKK?si=8Eo7rYlPSxOjSPMacMnl7Q" target="_blank" rel="noopener">
					<i class="fab fa-spotify"></i>
				  </a>
				  <a href="https://music.apple.com/us/artist/nived/1452705667" target="_blank" rel="noopener">
					<i class="fab fa-apple"></i>
				  </a>
				  <a href="https://www.youtube.com/@ThisIsNived" target="_blank" rel="noopener">
					<i class="fab fa-youtube"></i>
				  </a>
				  <a href="https://www.tiktok.com/@thisisnivedmusic" target="_blank" rel="noopener">
					<i class="fab fa-tiktok"></i>
				  </a>
				  <a href="https://bsky.app/profile/thisisnived.bsky.social" target="_blank" rel="noopener">
					<i class="fa-brands fa-bluesky"></i>
				  </a>
				  <a href="https://instagram.com/iamnivedmusic" target="_blank" rel="noopener">
					<i class="fab fa-instagram"></i>
				  </a>
			</div>
			<p>&copy; {new Date().getFullYear()} NIVED. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		padding-top: 5rem;
	}

	footer {
		background-color: var(--color-bg-1);
		padding: 2rem 0;
		margin-top: 2rem;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.social-icons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.social-icons a {
		font-size: 1.5rem;
	}

	.social-icons a:hover {
		color: var(--color-bg-0, #000000);
	}
</style>