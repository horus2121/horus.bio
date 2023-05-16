<script lang="ts">
	import { leftSidebar, rightSidebar } from '$lib/store';
	import type { TPosition } from '$types';

	export let position: TPosition;

	let leftSidebarOn: boolean;
	let rightSidebarOn: boolean;
	leftSidebar.subscribe((v) => (leftSidebarOn = v));
	rightSidebar.subscribe((v) => (rightSidebarOn = v));
</script>

{#if position == 'left'}
	{#if !leftSidebarOn}
		<div class="fixed w-3 h-[10%] left-0 animate-bounce" on:mouseenter={leftSidebar.openSidebar}>
			<i class="mi mi-tag relative -left-0.5" />
			<!-- <i class="mi mi-chevron-double-right relative -left-1" /> -->
		</div>
	{/if}
{:else if !rightSidebarOn}
	<div class="fixed w-3 h-[10%] right-0" on:mouseenter={rightSidebar.openSidebar}>
		<!-- <i class="mi mi-attachment" /> -->
		<i class="mi mi-options-vertical relative right-0.5" />
	</div>
{/if}
