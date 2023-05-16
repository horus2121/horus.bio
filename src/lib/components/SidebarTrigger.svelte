<script lang="ts">
	import { sidebar } from '$lib/store';
	import type { TPosition } from '$types';

	export let position: TPosition;

	let sidebarOn: boolean;
	sidebar.subscribe((v) => (sidebarOn = v));
</script>

<div
	class="fixed w-3 h-[10%] {sidebarOn ? 'collapse' : ''} {position === 'left'
		? 'left-0 animate-bounce'
		: 'right-0'}"
	on:mouseenter={sidebar.openSidebar}
>
	{#if position === 'left'}
		<i class="mi mi-tag relative -left-0.5" />
	{:else}
		<i class="mi mi-options-vertical relative right-0.5" />
	{/if}
	<!-- <i class="mi mi-chevron-double-right relative -left-1" /> -->
</div>
