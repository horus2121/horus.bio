<script lang="ts">
	import { formatDate } from '$lib/utils/date.js';

	export let data;
</script>

<section>
	<ul>
		{#each data.posts as post}
			<li class="grid p-4">
				<a
					class="text-[var(--c-5)] text-2xl capitalize"
					href={post.slug}
				>
					{post.title}</a
				>
				<p class="text-[var(--c-3)]">
					{formatDate(post.date)}
				</p>
				<p class="text-[var(--c-4)]">{post.desc}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	li:not(:last-child) {
		border-bottom: 1px solid var(--c-3);
	}
</style>
