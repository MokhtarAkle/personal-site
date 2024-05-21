<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { useTexture } from '@threlte/extras';
	import image from '$assets/image.png';
	import image1 from '$assets/image1.png';
	import { TextureLoader } from 'three';
	import { useLoader } from '@threlte/core';

	const map = useTexture(image1);
    const texture = useLoader(TextureLoader).load(image)
    const texture1 = useLoader(TextureLoader).load(image1)


	interactivity();
	const scale = spring(4);

	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
	});

	$: console.log($texture1);
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} castShadow />
	<T.Mesh
		position.y={1}
		scale={$scale}
		on:pointerenter={() => scale.set(1.5)}
		on:pointerleave={() => scale.set(1)}
		rotation.y={rotation}
		castShadow
	>
		<T.BoxGeometry />
        <T.MeshStandardMaterial map={$texture1} attach={(parent, self) => {
            if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
            else parent.material = [self]
          }} />
            <T.MeshStandardMaterial map={$texture} attach={(parent, self) => {
            if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
            else parent.material = [self]
          }} />
	</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.CircleGeometry args={[4, 40]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>
