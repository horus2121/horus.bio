<script lang="ts">
	import { sidebarStore } from '$lib/store';
	import type { TPosition } from '$types';
	import Icons from './Icons.svelte';

	export let position: TPosition;
</script>

<div
	class="fixed w-4 h-[10%] top-[80px] opacity-40
	{$sidebarStore ? 'collapse' : ''} 
	{position === 'left' ? 'left-0.5' : 'right-0.5'}"
	on:mouseenter={position === 'left'
		? sidebarStore.openSidebar
		: () => {}}
>
	<Icons
		name={position === 'left' ? 'tag' : 'moreVertical'}
	/>
</div>
