<script>
	import { T, useTask } from '@threlte/core';
	import { Grid, OrbitControls, interactivity, Environment } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import Box from './Box.svelte';
	import { OrthographicCamera } from 'svelte-cubed';


	const { target } = interactivity();
	target.set(document.getElementById('int-target') ?? undefined);
	const pos = spring({ x: 0, z: 0 });
	const setRandomPos = () => {
		pos.set({
			x: Math.random() * 10 - 5,
			z: Math.random() * 10 - 5
		});
	};

	export let data;

</script>

<T.PerspectiveCamera
  makeDefault
  position={[5, 4, 1]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
>
  <OrbitControls />
</T.PerspectiveCamera>
<!-- 
<T.OrthographicCamera
  makeDefault
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
>
  <OrbitControls />
</T.OrthographicCamera> -->

<Environment path="/src/lib/assets/" files="bg.jpg" isBackground={true} groundProjection={{ radius: 200, height: 5, scale: { x: 100, y: 100, z: 100 } }}/>

<T.AmbientLight intensity={1} />
<T.DirectionalLight position={[1, 2, 5]} />


<Box position.x={$pos.x} position.z={$pos.z} {data}/>
<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#ffffff"
	sectionThickness={0}
	fadeDistance={25}
	cellSize={2}
/>
