<script lang="ts">
	import {
		Mesh,
		OrbitControls,
		PerspectiveCamera,
		type Position
	} from '@threlte/core';
	import {
		BoxGeometry,
		MeshBasicMaterial,
		Color
	} from 'three';

	type TConfig = {
		color: string;
		rotateSpeed: number;
		position: Position;
	};

	export let config: TConfig;
	console.log(config);
</script>

<PerspectiveCamera position={{ x: 30, y: 5 }}>
	<OrbitControls
		autoRotate
		autoRotateSpeed={config.rotateSpeed}
	/>
</PerspectiveCamera>

<Mesh
	position={config.position}
	geometry={new BoxGeometry(1, 1, 1)}
	material={new MeshBasicMaterial({
		color: new Color(
			'#' + config.color
		).convertSRGBToLinear(),
		wireframe: true
	})}
/>
