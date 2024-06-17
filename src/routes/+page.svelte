<script>
    import { Canvas, extend } from '@threlte/core'
    import { onMount } from 'svelte';
    import Scene from './Scene.svelte'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

    onMount( async () => {

      extend({
    OrbitControls
  })

			})
  
      export let data;
      console.log(data.body[1]);
  </script>
  
  <div>
    <Canvas>
      <Scene {data} />
    </Canvas>
  </div>

  <style>
    div {
      height: 100vh;
    }
  </style>