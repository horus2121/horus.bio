<script lang="ts">
	import { sidebarStore } from '$lib/store';
</script>

<center
	class="w-5/6 mx-auto my-5 flex flex-col py-16
{$sidebarStore ? 'opacity-30' : ''}
"
>
	<h1 class="text-3xl font-bold m-5 underline">Blogs.</h1>
	<div class="text-md">
		<p class="m-1">Blog 1</p>
		<p class="m-1">Blog 1</p>
		<p class="m-1">Blog 1</p>
		<p class="m-1">Blog 1</p>
		<p class="m-1">Blog 1</p>
	</div>
</center>
