<script>
	import { forwardEventHandlers, T } from '@threlte/core';
	import { Text3DGeometry, Align } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import image from '$assets/image.png';
	import image1 from '$assets/image1.png';
  import image2 from '$assets/image2.png';
	import image3 from '$assets/image3.png';
  import image4 from '$assets/image4.png';
  import image5 from '$assets/image5.png';
	import { TextureLoader } from 'three';
	import { useLoader } from '@threlte/core';
  import { onMount } from 'svelte';

  onMount( async () => {


})
    const texture = useLoader(TextureLoader).load(image)
    const texture1 = useLoader(TextureLoader).load(image1)
    const texture2 = useLoader(TextureLoader).load(image2)
    const texture3 = useLoader(TextureLoader).load(image3)
    const texture4 = useLoader(TextureLoader).load(image4)
    const texture5 = useLoader(TextureLoader).load(image5)
	  const scale = spring(1);
    const scale1 = spring(1);
	  const component = forwardEventHandlers();
    let value = ''
    let value1 = ''


  export let data;
  console.log(data.body);
	value = data.body[1].name;
  value1 = data.body[4].name;
</script>

<T.Group
  {...$$restProps}
  bind:this={$component}
>
<T.Mesh 
position={[-0.75, 2, -3]}
rotation={[0, 0, 0]}
>
  <Text3DGeometry text={value1} size={0.1} depth={0.04}  />

  <T.MeshStandardMaterial
    color="#1E1E1E"
  />
</T.Mesh>
<T.Mesh
position.y={1}
position.x={0}
position.z={-3}
scale={$scale}

on:click={() => {
  $scale = 2 
}} 
on:dblclick={() => {
  $scale = 1
}}
castShadow
>
<T.BoxGeometry />
  {#if $texture}
    <T.MeshStandardMaterial map={$texture} attach={(parent, self) => {
    if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
    else parent.material = [self]
  }} />
<T.MeshStandardMaterial map={$texture} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
{/if}

</T.Mesh>


<T.Mesh 
position={[3.3, 2, 0.9]}
rotation={[0, -2, 0]}
>
  <Text3DGeometry text={value} size={0.1} depth={0.04}  />

  <T.MeshStandardMaterial 
    color="#351EB6"
  />
</T.Mesh>
<T.Mesh
scale={$scale1}

position.y={1}
position.x={3}
position.z={1.5}
rotation={[0, -2, 0]}

    on:click={() => {
      $scale1 = 2 
    }} 
    on:dblclick={() => {
      $scale1 = 1
    }}
castShadow
>
<T.BoxGeometry />
{#if $texture1}
    <T.MeshStandardMaterial map={$texture1} attach={(parent, self) => {
    if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
    else parent.material = [self]
  }} />
<T.MeshStandardMaterial map={$texture1} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture1} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture1} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture1} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture1} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
{/if}
</T.Mesh>
<T.Mesh
position.y={1}
position.x={-3}
position.z={1.5}

on:click={() => {
  $scale = 2 
}} 
on:dblclick={() => {
  $scale = 1
}}
castShadow
>
<T.BoxGeometry />

  {#if $texture2}
    <T.MeshStandardMaterial map={$texture2} attach={(parent, self) => {
    if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
    else parent.material = [self]
  }} />
<T.MeshStandardMaterial map={$texture2} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture2} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture2} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture2} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture2} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}}/>
{/if}
</T.Mesh>
<T.Mesh
position.y={1}
position.x={0}
position.z={3}
on:click={() => {
  $scale = 2 
}} 
on:dblclick={() => {
  $scale = 1
}}
castShadow
>
<T.BoxGeometry />
{#if $texture3}

    <T.MeshStandardMaterial map={$texture3} attach={(parent, self) => {
    if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
    else parent.material = [self]
  }} />
<T.MeshStandardMaterial map={$texture3} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture3} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture3} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture3} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture3} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
{/if}
</T.Mesh>
<T.Mesh
position.y={1}
position.x={-3}
position.z={-1.5}
on:click={() => {
  $scale = 2 
}} 
on:dblclick={() => {
  $scale = 1
}}
castShadow
>
<T.BoxGeometry />
{#if $texture4}


    <T.MeshStandardMaterial map={$texture4} attach={(parent, self) => {
    if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
    else parent.material = [self]
  }} />
<T.MeshStandardMaterial map={$texture4} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture4} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture4} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture4} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture4} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
{/if}
</T.Mesh>
<T.Mesh
position.y={1}
position.x={3}
position.z={-1.5}
on:click={() => {
  $scale = 2 
}} 
on:dblclick={() => {
  $scale = 1
}}
castShadow
>
<T.BoxGeometry />
{#if $texture5}

    <T.MeshStandardMaterial map={$texture5} attach={(parent, self) => {
    if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
    else parent.material = [self]
  }} />
<T.MeshStandardMaterial map={$texture5} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture5} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture5} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture5} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
<T.MeshStandardMaterial map={$texture5} attach={(parent, self) => {
  if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
  else parent.material = [self]
}} />
{/if}
</T.Mesh>
<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
<T.CircleGeometry args={[4, 40]} />
<T.MeshStandardMaterial color="white" />
</T.Mesh>
</T.Group>
