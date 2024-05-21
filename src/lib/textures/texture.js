import * as THREE from 'three';
import * as SC from 'svelte-cubed';


export function textureWrap(texture){
texture = new THREE.TextureLoader().load( "textures/image.png" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );

return texture
}


