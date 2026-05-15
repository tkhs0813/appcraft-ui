<script lang="ts">
	import '../../lib/styles.css';
	import { resolve } from '$app/paths';
	import { componentMetadata, componentRecipes } from '$lib/index.js';

	let query = $state('');
	let category = $state('all');

	const categories = ['all', 'primitive', 'pattern', 'product'];
	const categoryLabels: Record<string, string> = {
		all: 'All',
		primitive: 'Primitives',
		pattern: 'Patterns',
		product: 'Product components'
	};

	const componentsByCategory = $derived(
		categories.map((item) => ({
			id: item,
			label: categoryLabels[item],
			count:
				item === 'all'
					? componentMetadata.length
					: componentMetadata.filter((component) => component.category === item).length
		}))
	);

	const filteredComponents = $derived(
		componentMetadata.filter((component) => {
			const matchesCategory = category === 'all' || component.category === category;
			const normalized = query.trim().toLowerCase();
			const matchesQuery =
				normalized.length === 0 ||
				component.name.toLowerCase().includes(normalized) ||
				component.description.toLowerCase().includes(normalized) ||
				component.useCases.some((useCase) => useCase.toLowerCase().includes(normalized));

			return matchesCategory && matchesQuery;
		})
	);

	const featuredRecipes = componentRecipes.slice(0, 8);
</script>

<svelte:head>
	<title>Component Catalog · Appcraft UI</title>
	<meta
		name="description"
		content="Metadata-driven Appcraft UI component catalog for humans and AI coding agents."
	/>
</svelte:head>

<main class="catalog-page aui-root">
	<header class="catalog-hero">
		<nav class="catalog-topnav" aria-label="Catalog navigation">
			<a href={resolve('/')}>← Demo</a>
			<a href={resolve('/components')}>Components</a>
		</nav>
		<p class="eyebrow">Appcraft UI catalog</p>
		<div class="catalog-hero-grid">
			<div>
				<h1>Metadata-driven component catalog for AI-built applications.</h1>
				<p>
					Browse the public component surface by category, use case, guardrail, and recipe. This
					catalog is generated from the same metadata that agents use to choose components.
				</p>
			</div>
			<div class="catalog-stats" aria-label="Catalog summary">
				<div>
					<strong>{componentMetadata.length}</strong>
					<span>public components</span>
				</div>
				<div>
					<strong>{componentRecipes.length}</strong>
					<span>agent recipes</span>
				</div>
				<div>
					<strong>1</strong>
					<span>fixed theme</span>
				</div>
			</div>
		</div>
	</header>

	<section class="catalog-controls" aria-label="Filter components">
		<label>
			<span>Search components</span>
			<input
				type="search"
				placeholder="Try: settings, table, import, AI, chart..."
				bind:value={query}
			/>
		</label>
		<div class="category-tabs" role="list" aria-label="Component categories">
			{#each componentsByCategory as item (item.id)}
				<button
					type="button"
					class:active={category === item.id}
					onclick={() => (category = item.id)}
				>
					{item.label}
					<span>{item.count}</span>
				</button>
			{/each}
		</div>
	</section>

	<section class="catalog-layout">
		<aside class="recipe-panel" aria-label="Agent recipes">
			<div>
				<p class="eyebrow">Recipes</p>
				<h2>Use-case first selection</h2>
				<p>Agents should start from workflows and choose the largest fitting component surface.</p>
			</div>
			<div class="recipe-list">
				{#each featuredRecipes as recipe (recipe.useCase)}
					<article>
						<h3>{recipe.useCase}</h3>
						<p>{recipe.notes}</p>
						<div class="chip-row" aria-label="Recommended components">
							{#each recipe.components.slice(0, 5) as component (component)}
								<span>{component}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</aside>

		<section class="component-section" aria-live="polite">
			<div class="component-section-header">
				<div>
					<p class="eyebrow">Components</p>
					<h2>{filteredComponents.length} matching components</h2>
				</div>
				<p>
					Each card shows intended use cases and forbidden patterns so agents avoid hand-rolled UI.
				</p>
			</div>

			{#if filteredComponents.length === 0}
				<div class="empty-card">
					<h3>No components found</h3>
					<p>Try a broader search term or switch back to All.</p>
				</div>
			{:else}
				<div class="component-grid">
					{#each filteredComponents as component (component.name)}
						<article class="component-card">
							<div class="component-card-header">
								<div>
									<p>{component.category}</p>
									<h3>{component.name}</h3>
								</div>
								<span>{component.useCases.length} use cases</span>
							</div>
							<p>{component.description}</p>
							<div class="tag-group" aria-label="Use cases">
								{#each component.useCases as useCase (useCase)}
									<span>{useCase}</span>
								{/each}
							</div>
							<div class="guardrails">
								<strong>Guardrails</strong>
								<ul>
									{#each component.forbiddenPatterns.slice(0, 3) as pattern (pattern)}
										<li>{pattern}</li>
									{/each}
								</ul>
							</div>
						</article>
					{/each}
				</div>
			{/if}
		</section>
	</section>
</main>

<style>
	.catalog-page {
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

	.catalog-hero,
	.catalog-controls,
	.catalog-layout {
		max-width: 1180px;
		margin: 0 auto;
	}

	.catalog-hero {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-xl);
		background: color-mix(in srgb, var(--aui-surface) 92%, transparent);
		box-shadow: var(--aui-shadow-lg);
		padding: 1.5rem;
	}

	.catalog-topnav {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 3rem;
	}

	.catalog-topnav a {
		border: 1px solid var(--aui-border);
		border-radius: 999px;
		background: var(--aui-surface);
		color: var(--aui-text-muted);
		font-size: 0.8125rem;
		font-weight: 700;
		padding: 0.45rem 0.75rem;
		text-decoration: none;
	}

	.catalog-hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.7fr) minmax(18rem, 0.8fr);
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
		font-size: clamp(2.5rem, 6vw, 5rem);
		letter-spacing: -0.07em;
		line-height: 0.94;
		max-width: 13ch;
		margin-bottom: 1rem;
	}

	.catalog-hero p:not(.eyebrow) {
		color: var(--aui-text-muted);
		font-size: 1.05rem;
		line-height: 1.7;
		max-width: 56rem;
	}

	.catalog-stats {
		display: grid;
		gap: 0.75rem;
	}

	.catalog-stats div,
	.empty-card,
	.recipe-panel,
	.component-card,
	.catalog-controls {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
	}

	.catalog-stats div {
		padding: 1rem;
	}

	.catalog-stats strong {
		display: block;
		font-size: 2rem;
		letter-spacing: -0.04em;
	}

	.catalog-stats span,
	.component-section-header p,
	.recipe-panel p,
	.component-card p,
	.guardrails li,
	.catalog-controls span {
		color: var(--aui-text-muted);
	}

	.catalog-controls {
		display: grid;
		grid-template-columns: minmax(18rem, 1fr) auto;
		gap: 1rem;
		align-items: end;
		margin-top: 1rem;
		padding: 1rem;
	}

	.catalog-controls label {
		display: grid;
		gap: 0.5rem;
		font-weight: 750;
	}

	.catalog-controls input {
		width: 100%;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface-muted);
		color: var(--aui-text);
		font: inherit;
		padding: 0.8rem 0.95rem;
	}

	.category-tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: flex-end;
	}

	.category-tabs button {
		border: 1px solid var(--aui-border);
		border-radius: 999px;
		background: var(--aui-surface-muted);
		color: var(--aui-text-muted);
		cursor: pointer;
		font: inherit;
		font-size: 0.8125rem;
		font-weight: 800;
		padding: 0.55rem 0.75rem;
	}

	.category-tabs button.active {
		border-color: color-mix(in srgb, var(--aui-brand) 45%, var(--aui-border));
		background: color-mix(in srgb, var(--aui-brand) 10%, var(--aui-surface));
		color: var(--aui-brand-strong);
	}

	.category-tabs span {
		margin-left: 0.35rem;
	}

	.catalog-layout {
		display: grid;
		grid-template-columns: minmax(18rem, 0.75fr) minmax(0, 1.6fr);
		gap: 1rem;
		margin-top: 1rem;
	}

	.recipe-panel,
	.component-section {
		align-self: start;
	}

	.recipe-panel {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		position: sticky;
		top: 1rem;
	}

	.recipe-panel h2,
	.component-section-header h2 {
		font-size: 1.4rem;
		letter-spacing: -0.04em;
		margin-bottom: 0.4rem;
	}

	.recipe-list {
		display: grid;
		gap: 0.75rem;
	}

	.recipe-list article {
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-md);
		background: var(--aui-surface-muted);
		padding: 0.9rem;
	}

	.recipe-list h3,
	.component-card h3 {
		margin-bottom: 0.4rem;
	}

	.recipe-list p,
	.component-card p {
		font-size: 0.875rem;
		line-height: 1.55;
	}

	.chip-row,
	.tag-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.chip-row span,
	.tag-group span {
		border-radius: 999px;
		background: color-mix(in srgb, var(--aui-brand) 8%, var(--aui-surface));
		color: var(--aui-brand-strong);
		font-size: 0.72rem;
		font-weight: 800;
		padding: 0.28rem 0.5rem;
	}

	.component-section {
		display: grid;
		gap: 1rem;
	}

	.component-section-header {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: end;
		border: 1px solid var(--aui-border);
		border-radius: var(--aui-radius-lg);
		background: var(--aui-surface);
		box-shadow: var(--aui-shadow-sm);
		padding: 1rem;
	}

	.component-section-header p {
		max-width: 26rem;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.component-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.component-card,
	.empty-card {
		padding: 1rem;
	}

	.component-card-header {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.component-card-header p,
	.component-card-header span {
		color: var(--aui-brand);
		font-size: 0.7rem;
		font-weight: 850;
		letter-spacing: 0.08em;
		margin: 0 0 0.2rem;
		text-transform: uppercase;
	}

	.component-card-header span {
		border-radius: 999px;
		background: var(--aui-surface-muted);
		color: var(--aui-text-muted);
		height: fit-content;
		padding: 0.3rem 0.5rem;
		white-space: nowrap;
	}

	.guardrails {
		border-top: 1px solid var(--aui-border);
		margin-top: 1rem;
		padding-top: 0.8rem;
	}

	.guardrails strong {
		display: block;
		font-size: 0.78rem;
		margin-bottom: 0.4rem;
	}

	.guardrails ul {
		display: grid;
		gap: 0.3rem;
		margin: 0;
		padding-left: 1.1rem;
	}

	@media (max-width: 960px) {
		.catalog-page {
			padding: 1rem;
		}

		.catalog-hero-grid,
		.catalog-controls,
		.catalog-layout,
		.component-grid {
			grid-template-columns: 1fr;
		}

		.category-tabs {
			justify-content: flex-start;
		}

		.recipe-panel {
			position: static;
		}
	}
</style>
