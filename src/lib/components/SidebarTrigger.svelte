<script lang="ts">
	import { sidebarStore } from '$lib/store';
	import type { TPosition } from '$types';

	export let position: TPosition;
</script>

<div
	class="fixed w-3 h-[10%] top-10
	{$sidebarStore ? 'collapse' : ''} 
	{position === 'left' ? 'left-0 animate-bounce' : 'right-0'}"
	on:mouseenter={position === 'left' ? sidebarStore.openSidebar : () => {}}
>
	<i
		class="mi relative opacity-40
	{position === 'left' ? 'mi-tag -left-0.5' : 'mi-options-vertical right-0.5'}
	"
	/>
</div>
