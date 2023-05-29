<script lang="ts">
	import Cube from '$components/three/Cube.svelte';
	import { Canvas, type Position } from '@threlte/core';

	type TConfig = {
		color: string;
		rotateSpeed: number;
		position: Position;
	};

	const configs: TConfig[] = [
		{
			color: '16323b',
			rotateSpeed: 2,
			position: { x: 2, y: 2, z: 3 }
		},
		{
			color: '777572',
			rotateSpeed: 8,
			position: { x: 4, y: 2, z: 3 }
		},
		{
			color: '908a86',
			rotateSpeed: 2,
			position: { x: 6, y: 2, z: 3 }
		},
		{
			color: 'c6c2bb',
			rotateSpeed: 8,
			position: { x: 3, y: 2, z: 3 }
		},
		{
			color: '000000',
			rotateSpeed: 32,
			position: { x: 3, y: 4, z: 3 }
		},
		{
			color: 'f2f2f2',
			rotateSpeed: 8,
			position: { x: 3, y: 6, z: 3 }
		},
		{
			color: '16323b',
			rotateSpeed: 2,
			position: { x: 3, y: 3, z: 2 }
		},
		{
			color: '777572',
			rotateSpeed: 8,
			position: { x: 3, y: 3, z: 4 }
		},
		{
			color: '908a86',
			rotateSpeed: 2,
			position: { x: 3, y: 3, z: 6 }
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
		class="w-auto h-[50vh] gap-1 text-md text-[var(--c-5)]"
	>
		<Canvas>
			{#each configs as config, index}
				<Cube {config} />
			{/each}
		</Canvas>
	</div>
</div>
