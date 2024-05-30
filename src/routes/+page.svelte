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


  </script>
  
  <div>
    <Canvas>
      <Scene />
    </Canvas>
  </div>

  <style>
    div {
      height: 100vh;
    }
  </style>