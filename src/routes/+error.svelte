<script lang="ts">
	import { page } from '$app/stores';
</script>

<center class="w-5/6 m-auto">
	<h1 class="text-3xl font-bold m-5 underline">{$page.status}</h1>
	<p>{$page.error?.message.toUpperCase()}</p>
</center>
