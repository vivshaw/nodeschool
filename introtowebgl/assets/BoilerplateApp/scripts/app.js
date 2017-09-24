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
        childBox,
        mesh;

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

            document.addEventListener('mousedown', onDocumentMouseDown, false);

            function onDocumentMouseDown(event) {
                event.preventDefault();
                var projector = new THREE.Projector();
                var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
                
                projector.unprojectVector(vector, camera);

                var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
                var intersects = raycaster.intersectObjects(objects);
                
                if (intersects.length > 0) {
                    alert('intersects!')
                }
            }

            

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
