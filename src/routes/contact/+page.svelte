<svelte:head>
	<title>Contact - NIVED</title>
	<meta name="description" content="Get in touch with NIVED" />
</svelte:head>

<div class="container">
	<h1>Contact</h1>
	
	<div class="contact-content">
		<div class="contact-info">
			<h2>Get in Touch</h2>
			<p>For booking inquiries and other business opportunities:</p>

			<a href="mailto:thisisnived@gmail.com" class="submit-button">
				Send Email
			</a>
		</div>
	</div>
</div>

<style>
	.contact-content {
		max-width: 800px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	.contact-info {
		padding: 2rem;
		background: var(--color-bg-1);
		border-radius: 8px;
		text-align: center;
	}

	.submit-button {
		display: inline-block;
		padding: 0.75rem 2rem;
		background-color: var(--color-bg-0);
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		font-family: var(--font-body);
		text-decoration: none;
		transition: background-color 0.2s;
	}

	.submit-button:hover {
		background-color: #0a0a0a;
		color: white;
	}

	@media (max-width: 768px) {
		.contact-info {
			padding: 1.5rem;
		}

		.submit-button {

			text-align: center;
		}
	}
</style>