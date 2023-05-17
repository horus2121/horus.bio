<script lang="ts">
	import { sidebar } from '$lib/store';
	import type { TPosition } from '$types';

	export let position: TPosition;

	let sidebarOn: boolean;
	sidebar.subscribe((v) => (sidebarOn = v));
</script>

<div
	class="fixed w-3 h-[10%]
	{sidebarOn ? 'collapse' : ''} 
	{position === 'left' ? 'left-0 animate-bounce' : 'right-0'}"
	on:mouseenter={sidebar.openSidebar}
>
	<i
		class="mi relative
	{position === 'left' ? 'mi-tag -left-0.5' : 'mi-options-vertical right-0.5'}
	"
	/>
</div>
