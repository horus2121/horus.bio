<script lang="ts">
	import Castle from './icons/Castle.svelte';
	import Cloud from './icons/Cloud.svelte';
	import Github from './icons/Github.svelte';
	import Laptop from './icons/Laptop.svelte';
	import MoreVertical from './icons/MoreVertical.svelte';
	import Camera from './icons/Camera.svelte';
	import Tag from './icons/Tag.svelte';
	import Twitter from './icons/Twitter.svelte';
	import User from './icons/User.svelte';

	type TIcons = {
		[key: string]: any;
	};

	const icons: TIcons = {
		cloud: Cloud,
		laptop: Laptop,
		user: User,
		tag: Tag,
		moreVertical: MoreVertical,
		castle: Castle,
		github: Github,
		twitter: Twitter,
		camera: Camera
	};
	export let name: keyof typeof icons;
</script>

<svelte:component this={icons[name]} />
