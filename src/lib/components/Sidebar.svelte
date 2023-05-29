<script lang="ts">
	import { sidebarStore } from '$lib/store';
	import { clickOutside } from '$lib/utils/clickOutside';
	import Icons from './Icons.svelte';

	const navItems = [
		{
			href: '/',
			content: 'About',
			icon: 'user'
		},
		{
			href: '/project',
			content: 'Project',
			icon: 'laptop'
		},
		{
			href: '/posts',
			content: 'Blog',
			icon: 'cloud'
		},
		{
			href: '/demo',
			content: 'Demo',
			icon: 'castle'
		},
		{
			href: '/gallery',
			content: 'Gallery',
			icon: 'camera'
		}
	];
</script>

<nav
	class="fixed flex flex-col w-[150px] h-auto z-50 px-5 top-[80px] rounded-xl
	{!$sidebarStore ? 'collapse' : ''}  
	"
	on:mouseleave={sidebarStore.closeSidebar}
	use:clickOutside={sidebarStore.closeSidebar}
>
	<ul class="my-1">
		{#each navItems as item}
			<li
				class="flex px-2 rounded-md hover:bg-[var(--c-3)]"
			>
				<!-- 
					set it invisible at the start of animation 
				-->
				<a
					href={item.href}
					class="py-3 flex space-x-2
					{!$sidebarStore ? 'opacity-0' : ''}  
				"
				>
					<Icons name={item.icon} />
					<span>
						{item.content}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateX(-50%);
		}

		100% {
			opacity: 0.8;
			transform: translateX(0%);
		}
	}

	@keyframes fadeOut {
		0% {
			opacity: 0.8;
			transform: translateX(0%);
		}

		100% {
			opacity: 0;
			transform: translateX(-50%);
		}
	}

	nav li a {
		animation: fadeIn 0.5s ease-out forwards;
	}

	nav:not(:hover) li a {
		animation: fadeOut 0.5s ease-out forwards;
	}

	nav:hover li:nth-child(1) {
		animation-delay: 0.5s;
	}
	nav:hover li:nth-child(2) {
		animation-delay: 0.6;
	}
	nav:hover li:nth-child(3) {
		animation-delay: 0.7;
	}
	nav:hover li:nth-child(4) {
		animation-delay: 0.8s;
	}
	nav:hover li:nth-child(5) {
		animation-delay: 0.9s;
	}
</style>
