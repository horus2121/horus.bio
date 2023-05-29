<script lang="ts">
	import {
		Mesh,
		OrbitControls,
		PerspectiveCamera
	} from '@threlte/core';
	import {
		BoxGeometry,
		MeshBasicMaterial,
		Color
	} from 'three';

	type TConfig = {
		color: string;
		rotateSpeed: number;
	};

	export let config: TConfig;
	console.log(config);
</script>

<PerspectiveCamera position={{ x: 5, y: 5 }}>
	<OrbitControls
		autoRotate
		autoRotateSpeed={config.rotateSpeed}
	/>
</PerspectiveCamera>

{#if config.rotateSpeed === 32}
	<Mesh
		geometry={new BoxGeometry(2, 2, 2)}
		material={new MeshBasicMaterial({
			color: new Color(
				'#' + config.color
			).convertSRGBToLinear(),
			wireframe: true
		})}
	/>
{:else}
	<Mesh
		geometry={new BoxGeometry(1, 1, 1)}
		material={new MeshBasicMaterial({
			color: new Color(
				'#' + config.color
			).convertSRGBToLinear(),
			wireframe: true
		})}
	/>
{/if}
