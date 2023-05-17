<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Sidenav from '$components/Sidebar.svelte';
	import SidebarTrigger from '$components/SidebarTrigger.svelte';
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
	<slot />
	<Footer />
</div>
