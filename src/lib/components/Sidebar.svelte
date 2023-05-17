<script lang="ts">
	import { sidebarStore } from '$lib/store';
	import { clickOutside } from '$directives/clickOutside';
</script>

<nav
	class="fixed flex flex-col w-20 h-1/2 m-2 z-50 top-10
	{!$sidebarStore ? 'collapse' : ''}  
	"
	on:mouseleave={sidebarStore.closeSidebar}
	use:clickOutside={sidebarStore.closeSidebar}
>
	<a href="/" class="xl my-1">About</a>
	<a href="/project" class="xl my-1">Project</a>
	<a href="/blog" class="xl my-1">Blog</a>
</nav>
