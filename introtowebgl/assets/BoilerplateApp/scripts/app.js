var demo = (function(){

    "use strict";
    
    var scene=new THREE.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls=null,
        swapCamera=1,
        swapBox=1;

        function initScene(){
    
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);
                      
            camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth / window.innerHeight,
                    1,
                    1000
                );
            
            camera.position.set( 0, 0, 100 );
            
            scene.add(camera);  

            box = new THREE.Mesh(
              new THREE.CubeGeometry(
                20,
                20,
                20),
              new THREE.MeshBasicMaterial({color: 0xFF0000}));

            scene.add(box);

            requestAnimationFrame(render);

        };

        function render() {
                renderer.render(scene, camera); 

                box.rotation.x += .01;

                if (box.scale.x > 1.5 || box.scale.x < 0.5) {
                    swapBox = -swapBox;
                }

                box.scale.x += .03 * swapBox;
                box.scale.y += .03 * swapBox;
                box.scale.z += .03 * swapBox;
                
                requestAnimationFrame(render);
        };
       
        window.onload = initScene;

})();
