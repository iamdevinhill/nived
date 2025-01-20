<svelte:head>
	<title>Videos - NIVED</title>
	<meta name="description" content="Watch the latest music videos from NIVED" />
</svelte:head>

<div class="container">
	<h1>Videos</h1>
	
	<div class="videos">
		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/fGzgd7NmDH4?si=2UsWSRifk6uzO_oJ" 
					title="SEE - Music Video"
					loading="lazy"
					width="560"
					height="315"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<h3>"SEE"</h3>
		</div>
	<br>
		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/2WGOqvc5-cw?si=gVnnRKXKc63pqtQ4" 
					title="SHAME - Music Video"
					loading="lazy"
					width="560"
					height="315"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<h3>"SHAME"</h3>
		</div>
		<br>
		<div class="video">
			<div class="video-container">
				<iframe
					src="https://www.youtube.com/embed/zb1uNhX2dmY?si=7lKGGA3gYcBsyFy0" 
					title="CRY - Music Video"
					loading="lazy"
					width="560"
					height="315"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<h3>"CRY"</h3>
		</div>
		<br>
		<div class="video">
			<div class="video-container">
				<iframe
				src="https://www.youtube.com/embed/JxLFzAkX2Uo?si=zA1TIX0d1zMqifW2"					
				title="CRY (Stripped) - Music Video"
					loading="lazy"
					width="560"
					height="315"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<h3>"CRY (Stripped Version)"</h3>
		</div>
	</div>
</div>

<style>
	.videos {
		display: inline;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 3rem;
		margin: 3rem 0;
	}

	.video {
		background: var(--color-bg-1);
		padding: 2rem;
		border-radius: 12px;
	}

	.video-container {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
		margin-bottom: 1.5rem;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}

	h3 {
		margin: 0;
		text-align: center;
		font-size: 1.5rem;
	}
</style>