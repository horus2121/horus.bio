<script lang="ts">
	import SidebarTrigger from './SidebarTrigger.svelte';
	import Sidebar from './Sidebar.svelte';
	import type { TPosition } from '$types';

	const positions: TPosition[] = ['left', 'right'];
</script>

<div class="group">
	{#each positions as position}
		<SidebarTrigger {position} />
	{/each}
	<Sidebar />
</div>
