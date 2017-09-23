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
        swapBox=1,
        childBox;

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

            childBox = new THREE.Mesh(
                new THREE.CubeGeometry(10, 10, 10),
                new THREE.MeshBasicMaterial({color: 0x0000FF}));

                childBox.name = 'friend';

            scene.add(box);
            box.add(childBox);
            box.getObjectByName('friend').position.x += 20;

            requestAnimationFrame(render);

        };

        function render() {
                renderer.render(scene, camera); 

                box.rotation.x += .01;

                if (box.position.x > 50 || box.position.x < -50) {
                    swapBox = -swapBox;
                }

                box.position.x += .1 * swapBox;
                
                requestAnimationFrame(render);
        };
       
        window.onload = initScene;

})();
