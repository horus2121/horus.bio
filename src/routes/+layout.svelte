<script lang="ts">
	import Sidenav from '$components/Sidebar.svelte';
	import SidebarTrigger from '$components/SidebarTrigger.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" />
</svelte:head>

<SidebarTrigger position="left" />
<Sidenav />
<SidebarTrigger position="right" />
<slot />
