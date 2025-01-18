<script>
	import { page } from '$app/stores';
	let menuOpen = false;
</script>

<header>
	<nav>
		<div class="logo">
			<a href="/">Nicky Saturn</a>
		</div>
		<button class="menu-toggle" on:click={() => menuOpen = !menuOpen} aria-label="Toggle menu">
			<i class="fas {menuOpen ? 'fa-times' : 'fa-bars'}"></i>
		</button>
		<div class="nav-container" class:open={menuOpen}>
			<ul class="nav-links">
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/" on:click={() => menuOpen = false}>Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/music' ? 'page' : undefined}>
					<a href="/music" on:click={() => menuOpen = false}>Music</a>
				</li>
				<li aria-current={$page.url.pathname === '/videos' ? 'page' : undefined}>
					<a href="/videos" on:click={() => menuOpen = false}>Videos</a>
				</li>
				<li aria-current={$page.url.pathname === '/tour' ? 'page' : undefined}>
					<a href="/tour" on:click={() => menuOpen = false}>Tour</a>
				</li>
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a href="/contact" on:click={() => menuOpen = false}>Contact</a>
				</li>
			</ul>
			<div class="social-icons">
				<a href="https://open.spotify.com/artist/4qqgNsnTVsVq4o386eRAja?si=woe_BQw8SLqxhhtPymTAOw" target="_blank" rel="noopener">
					<i class="fab fa-spotify"></i>
				</a>
				
				<a href="https://music.apple.com/us/artist/nicky-saturn/1573096259" target="_blank" rel="noopener">
					<i class="fab fa-apple"></i>
				</a>
				<a href="https://www.youtube.com/channel/UC7IS0ZVN3C5MQ5XBO_7ihYg" target="_blank" rel="noopener">
					<i class="fab fa-youtube"></i>
				</a>
				<a href="https://www.tiktok.com/@nickysaturnmusic?lang=en" target="_blank" rel="noopener">
					<i class="fab fa-tiktok"></i>
				</a>
				<a href="https://instagram.com/nickysaturn" target="_blank" rel="noopener">
					<i class="fab fa-instagram"></i>
				</a>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		background-color: var(--color-theme-1);
		padding: 1.5rem 0;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1000;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		position: relative;
	}

	.logo a {
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
	}

	.menu-toggle {
		display: none;
		background: none;
		border: none;
		color: white;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.5rem;
	}

	.nav-container {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		color: white;
		font-weight: 500;
	}

	.nav-links a:hover {
  		color: var(--color-bg-2, #1a1a1a); /* Using the custom CSS variable, or fallback color */
	}

	.social-icons {
		display: flex;
		gap: 1rem;
	}

	.social-icons a {
		color: white;
		font-size: 1.2rem;
	}

	.social-icons a:hover {
		color: var(--color-bg-2, #1a1a1a); /* Using the custom CSS variable, or fallback color */
	}

	@media (max-width: 768px) {
		.menu-toggle {
			display: block;
		}

		.nav-container {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background-color: var(--color-theme-1);
			padding: 1rem;
			flex-direction: column;
			align-items: center;
		}

		.nav-container.open {
			display: flex;
		}

		.nav-links {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.social-icons {
			margin-top: 1rem;
		}
	}
</style>