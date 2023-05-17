<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Sidenav from '$components/Sidebar.svelte';
	import SidebarTrigger from '$components/SidebarTrigger.svelte';
	import { sidebarStore } from '$lib/store';
	import type { TPosition } from '$types';
	import '../../app.css';

	const positions: TPosition[] = ['left', 'right'];
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" />
</svelte:head>

<div class="relative">
	{#each positions as position}
		<SidebarTrigger {position} />
	{/each}
	<Sidenav />
	<main
		class="w-5/6 min-h-screen m-auto py-10
		{$sidebarStore ? 'opacity-30' : ''}
	"
	>
		<slot />
	</main>
	<Footer />
</div>
