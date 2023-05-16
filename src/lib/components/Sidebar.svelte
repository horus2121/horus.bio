<script lang="ts">
	import { sidebar } from '$lib/store';
	import { clickOutside } from '$utils/clickOutside';

	let sidebarOn: boolean;
	sidebar.subscribe((v) => (sidebarOn = v));
</script>

<nav
	class="fixed flex flex-col w-20 h-1/2 {!sidebarOn ? 'collapse' : ''}  ml-2 z-50"
	on:mouseleave={sidebar.closeSidebar}
	use:clickOutside={sidebar.closeSidebar}
>
	<a href="/" class="xl my-1">Home</a>
	<a href="/" class="xl my-1">Project</a>
	<a href="/" class="xl my-1">Blog</a>
</nav>
