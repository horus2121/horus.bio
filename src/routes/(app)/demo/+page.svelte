<script lang="ts">
	import Cube from '$components/three/Cube.svelte';
	import { Canvas } from '@threlte/core';

	type TConfig = {
		color: string;
		rotateSpeed: number;
	};

	const configs: TConfig[] = [
		{
			color: '16323b',
			rotateSpeed: 2
		},
		{
			color: '777572',
			rotateSpeed: 8
		},
		{
			color: '908a86',
			rotateSpeed: 2
		},
		{
			color: 'c6c2bb',
			rotateSpeed: 8
		},
		{
			color: '000000',
			rotateSpeed: 32
		},
		{
			color: 'f2f2f2',
			rotateSpeed: 8
		},
		{
			color: '16323b',
			rotateSpeed: 2
		},
		{
			color: '777572',
			rotateSpeed: 8
		},
		{
			color: '908a86',
			rotateSpeed: 2
		}
	];
</script>

<div>
	<h1
		class="text-3xl text-[var(--c-5)] font-bold mb-5 underline"
	>
		Demo.
	</h1>

	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 text-md text-[var(--c-5)]"
	>
		{#each configs as config, index}
			<div class="w-auto">
				<Canvas>
					<Cube {config} />
				</Canvas>
				<div class=" text-center w-auto">
					<span>3D Cubes {index}</span>
				</div>
			</div>
		{/each}
	</div>
</div>
