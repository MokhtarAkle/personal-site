<script>
    import { Canvas, extend } from '@threlte/core'
    import { onMount } from 'svelte';

    import Scene from './Scene.svelte'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

    onMount( async () => {

      extend({
    OrbitControls
  })

    const username = 'MokhtarAkle';
		const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`;

		fetch(apiUrl)
			.then((response) => response.json())
			.then((repos) => {
				repos = repos.map((repo) => {
					return {
						...repo,
						name: repo.name.replace(/-/g, ' ')
					};
				});


				console.log(repos)
				});
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