<script lang="ts">
	import 'appcraft-ui/styles.css';
	import { resolve } from '$app/paths';
	import ComponentShowcase from '$lib/ComponentShowcase.svelte';

	let { data } = $props();
	const component = $derived(data.component);
</script>

<svelte:head>
	<title>{component.name} · Appcraft UI</title>
	<meta name="description" content={`Props, examples, and guardrails for ${component.name}.`} />
</svelte:head>

<main class="detail-page aui-root">
	<header class="detail-hero">
		<nav class="detail-topnav" aria-label="Component navigation">
			<a href={resolve('/')}>← Demo</a>
			<a href={resolve('/components')}>Components</a>
		</nav>
		<p class="eyebrow">{component.category}</p>
		<div class="detail-hero-grid">
			<div>
				<h1>{component.name}</h1>
				<p>{component.description}</p>
			</div>
			<div class="doc-status" data-status={component.status}>
				<strong
					>{component.status === 'documented' ? 'Documented preview' : 'Generated props'}</strong
				>
				<span>
					{component.status === 'documented'
						? 'This page has authored usage examples and a visual preview.'
						: 'Props were generated from the component source; add examples to make it visual.'}
				</span>
			</div>
		</div>
	</header>

	<section class="detail-layout">
		<aside class="side-panel" aria-label="Component metadata">
			<section>
				<p class="eyebrow">Use cases</p>
				<div class="chip-row">
					{#each component.useCases as useCase (useCase)}
						<span>{useCase}</span>
					{/each}
				</div>
			</section>
			<section>
				<p class="eyebrow">Guardrails</p>
				<ul>
					{#each component.forbiddenPatterns as pattern (pattern)}
						<li>{pattern}</li>
					{/each}
				</ul>
			</section>
		</aside>

		<div class="main-column">
			<section class="doc-card">
				<div class="section-heading">
					<p class="eyebrow">Preview</p>
					<h2>Rendered UI</h2>
				</div>
				<ComponentShowcase name={component.name} />
			</section>

			<section class="doc-card">
				<div class="section-heading">
					<p class="eyebrow">Props</p>
					<h2>{component.name} API</h2>
					<p>
						This table is generated from the component's typed <code>Props</code> interface, then
						enriched by <code>component-docs.ts</code> when human descriptions are available.
					</p>
				</div>
				{#if component.props.length > 0}
					<div class="props-table-wrap">
						<table class="props-table">
							<thead>
								<tr>
									<th>Prop</th>
									<th>Type</th>
									<th>Default</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								{#each component.props as prop (prop.name)}
									<tr>
										<td>
											<code>{prop.name}</code>
											{#if prop.required}
												<span class="required">required</span>
											{/if}
										</td>
										<td><code>{prop.type}</code></td>
										<td>{prop.defaultValue || '—'}</td>
										<td
											>{prop.description ||
												'Generated from source. Add a description in component-docs.ts.'}</td
										>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{:else}
					<div class="empty-card">
						<h3>No public props detected</h3>
						<p>
							This component either has no typed props yet or uses a pattern the generator cannot
							read.
						</p>
					</div>
				{/if}
			</section>

			<section class="doc-card">
				<div class="section-heading">
					<p class="eyebrow">Usage</p>
					<h2>Examples</h2>
				</div>
				{#if component.examples.length > 0}
					<div class="example-list">
						{#each component.examples as example (example.id)}
							<article class="example-card">
								<h3>{example.title}</h3>
								<p>{example.description}</p>
								<pre><code>{example.code}</code></pre>
							</article>
						{/each}
					</div>
				{:else}
					<div class="empty-card">
						<h3>Usage examples not authored yet</h3>
						<p>
							Add examples to <code>apps/catalog/src/lib/component-docs.ts</code>. The route, slug,
							metadata, and prop table already exist automatically.
						</p>
					</div>
				{/if}
			</section>
		</div>
	</section>
</main>

<style>
	.detail-page {
		min-height: 100vh;
		background:
			radial-gradient(
				circle at top left,
				color-mix(in srgb, var(--aui-brand) 12%, transparent),
				transparent 34rem
			),
			var(--aui-surface-muted);
		color: var(--aui-text);
		font-family: var(--aui-font-sans);
		padding: 2rem;
	}

	.detail-hero,
	.detail-layout {
		max-width: 1180px;
		margin: 0 auto;
	}

	.detail-hero,
	.doc-card,
	.side-panel,
	.empty-card {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-xl);
		background: color-mix(in srgb, var(--aui-surface) 94%, transparent);
		box-shadow: var(--aui-shadow-sm);
	}

	.detail-hero {
		padding: 1.5rem;
	}

	.detail-topnav {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 3rem;
	}

	.detail-topnav a {
		border: 1px solid var(--aui-border);
		border-radius: 999px;
		background: var(--aui-surface);
		color: var(--aui-text-muted);
		font-size: 0.8125rem;
		font-weight: 700;
		padding: 0.45rem 0.75rem;
		text-decoration: none;
	}

	.detail-hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.42fr);
		gap: 2rem;
		align-items: end;
	}

	.eyebrow {
		color: var(--aui-brand);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		margin: 0 0 0.75rem;
		text-transform: uppercase;
	}

	h1,
	h2,
	h3,
	p {
		margin-top: 0;
	}

	h1 {
		font-size: clamp(3rem, 8vw, 6rem);
		letter-spacing: -0.08em;
		line-height: 0.9;
		margin-bottom: 1rem;
	}

	.detail-hero p:not(.eyebrow),
	.section-heading p,
	.example-card p,
	.empty-card p,
	.side-panel li,
	.doc-status span {
		color: var(--aui-text-muted);
		line-height: 1.6;
	}

	.doc-status {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface-muted);
		padding: 1rem;
	}

	.doc-status strong {
		display: block;
		margin-bottom: 0.35rem;
	}

	.detail-layout {
		display: grid;
		grid-template-columns: minmax(18rem, 0.72fr) minmax(0, 1.55fr);
		gap: 1rem;
		margin-top: 1rem;
	}

	.side-panel {
		display: grid;
		gap: 1.25rem;
		align-self: start;
		padding: 1rem;
		position: sticky;
		top: 1rem;
	}

	.side-panel ul {
		display: grid;
		gap: 0.5rem;
		margin: 0;
		padding-left: 1.1rem;
	}

	.main-column {
		display: grid;
		gap: 1rem;
	}

	.doc-card,
	.empty-card {
		padding: 1rem;
	}

	.section-heading h2 {
		font-size: 1.4rem;
		letter-spacing: -0.04em;
		margin-bottom: 0.4rem;
	}

	.chip-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.chip-row span,
	.required {
		border-radius: 999px;
		background: color-mix(in srgb, var(--aui-brand) 8%, var(--aui-surface));
		color: var(--aui-brand-strong);
		font-size: 0.72rem;
		font-weight: 800;
		padding: 0.28rem 0.5rem;
	}

	.props-table-wrap {
		overflow-x: auto;
	}

	.props-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.875rem;
	}

	.props-table th,
	.props-table td {
		border-bottom: 1px solid var(--aui-border);
		padding: 0.85rem 0.75rem;
		text-align: left;
		vertical-align: top;
	}

	.props-table th {
		color: var(--aui-text-muted);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.props-table td:nth-child(2) {
		min-width: 13rem;
	}

	.required {
		display: inline-flex;
		margin-left: 0.4rem;
	}

	.example-list {
		display: grid;
		gap: 0.75rem;
	}

	.example-card {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface-muted);
		padding: 1rem;
	}

	pre {
		overflow-x: auto;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-text);
		color: var(--aui-surface);
		padding: 1rem;
	}

	code {
		font-family:
			ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
		font-size: 0.85em;
	}

	@media (max-width: 960px) {
		.detail-page {
			padding: 1rem;
		}

		.detail-hero-grid,
		.detail-layout {
			grid-template-columns: 1fr;
		}

		.side-panel {
			position: static;
		}
	}
</style>
