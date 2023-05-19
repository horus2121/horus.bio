<script lang="ts">
	import { formatDate } from '$lib/utils/date.js';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<article class="w-5/6 inset-auto">
	<div>
		<h1 class="text-5xl text-[var(--c-5)] capitalize mb-2">
			{data.metadata.title}
		</h1>
		<p class="text-[var(--c-4)]">
			Updated at {formatDate(data.metadata.date)}
		</p>
	</div>

	<div class="prose text-[var(--c-5)]">
		<svelte:component this={data.content} />
	</div>
</article>
