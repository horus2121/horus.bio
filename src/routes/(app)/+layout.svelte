<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Sidenav from '$components/Sidebar.svelte';
	import SidebarTrigger from '$components/SidebarTrigger.svelte';
	import { sidebarStore } from '$lib/store';
	import type { TPosition } from '$types';
	import '../../app.css';

	const positions: TPosition[] = ['left', 'right'];
</script>

<div class="relative">
	{#each positions as position}
		<SidebarTrigger {position} />
	{/each}
	<Sidenav />
	<main
		class="w-5/6 min-h-screen m-auto px-20 py-40
		{$sidebarStore ? 'opacity-30' : ''}
	"
	>
		<slot />
	</main>
	<Footer />
</div>
