<script lang="ts">
	import { leftSidebar, rightSidebar } from '$lib/store';
	import type { TPosition } from '$types';

	let leftSidebarOn: boolean;
	let rightSidebarOn: boolean;
	leftSidebar.subscribe((v) => (leftSidebarOn = v));
	rightSidebar.subscribe((v) => (rightSidebarOn = v));
</script>

{#if leftSidebarOn}
	<nav
		class="fixed flex flex-col w-20 h-1/2 left-0 ml-2 z-50"
		on:mouseleave={leftSidebar.closeSidebar}
	>
		<a href="/" class="xl my-1">Home</a>
		<a href="/" class="xl my-1">Project</a>
		<a href="/" class="xl my-1">Blog</a>
	</nav>
{/if}
{#if rightSidebarOn}
	<nav
		class="fixed flex flex-col w-20 h-1/2 right-0 ml-2 z-50"
		on:mouseleave={rightSidebar.closeSidebar}
	>
		<a href="/" class="xl my-1">Home</a>
		<a href="/" class="xl my-1">Project</a>
		<a href="/" class="xl my-1">Blog</a>
		<a href="/" class="xl my-1">Contact</a>
	</nav>
{/if}
