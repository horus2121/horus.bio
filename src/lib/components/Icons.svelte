<script lang="ts">
	import {
		Cloud,
		Laptop,
		User,
		Tag,
		MoreVertical,
		Castle,
		Github,
		Twitter,
		Camera
	} from 'lucide-svelte';

	const icons: Record<string, typeof Cloud> = {
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
