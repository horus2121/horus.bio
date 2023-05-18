<script lang="ts">
	import Cloud from './icons/Cloud.svelte';
	import Laptop from './icons/Laptop.svelte';
	import MoreVertical from './icons/MoreVertical.svelte';
	import Tag from './icons/Tag.svelte';
	import User from './icons/User.svelte';

	type TIcons = {
		[key: string]: any;
	};

	const icons: TIcons = {
		cloud: Cloud,
		laptop: Laptop,
		user: User,
		tag: Tag,
		moreVertical: MoreVertical
	};
	export let name: keyof typeof icons;
</script>

<svelte:component this={icons[name]} {...$$props} />
