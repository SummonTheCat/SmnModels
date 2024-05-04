import * as THREE from './libs/three.module.min.js';
import { GLTFLoader } from './libs/GLTFLoader.js';
import { OrbitControls } from './libs/OrbitControls.js';

// Holders
window.viewers = {};

function createViewer(modelElement){
    // Get the model element attributes
    const elemID = modelElement.getAttribute('id');
    const elemSrc = modelElement.getAttribute('src');
    const elemBehavior = modelElement.getAttribute('behaviour');
    const elemAppearance = modelElement.getAttribute('appearance');
    const elemScale = modelElement.getAttribute('scale');
    const elemRotation = modelElement.getAttribute('rotation');
    
    setupModelElement(modelElement);

    // Setup the viewer object
    let viewer = {};
    viewer.domElement = modelElement;
    
    setupScene(viewer, elemRotation);
    setupModel(viewer, elemSrc, elemScale);
    setupAppearance(viewer, elemAppearance);
    setupAnimation(viewer, elemBehavior);

    // Store viewer object
    window.viewers[elemID] = viewer;
}

function setupModelElement(modelElement){
    // Set inner Text to the hover text and then remove it
    if(modelElement.innerHTML != '') modelElement.setAttribute('title', modelElement.innerHTML);
    modelElement.innerHTML = '';
    // Set the style of the model element 
    modelElement.style.display = 'block';
    if(modelElement.style.width == '') modelElement.style.width = '100%';
    if(modelElement.style.height == '') modelElement.style.height = '100%';
}

function setupScene(viewer, elemRotation){
    // Create a scene
    viewer.scene = new THREE.Scene();
    // Create a camera
    viewer.camera = new THREE.PerspectiveCamera(75, viewer.domElement.clientWidth / viewer.domElement.clientHeight, 0.1, 1000);
    const distance = 5;
    if(elemRotation == null) elemRotation = '45 0 45'; 
    const [x, y, z] = elemRotation.split(' ').map(parseFloat); 

    // Correct the rotation to align the camera with the top-left corner
    const correctedRotation = new THREE.Euler(x, y, z);
    const position = new THREE.Vector3(0, 0, -distance); // Negative z for correct direction
    position.applyEuler(correctedRotation);
    viewer.camera.position.copy(position);
    viewer.camera.lookAt(0, 0, 0); // Look at the center point


    
    // Create a renderer
    viewer.renderer = new THREE.WebGLRenderer({antialias: true});
    viewer.renderer.setSize(viewer.domElement.clientWidth, viewer.domElement.clientHeight);
    
    // Append the renderer to the modelElement
    viewer.domElement.appendChild(viewer.renderer.domElement);

    // Lights
    viewer.ambientLight = new THREE.AmbientLight(0xffffff, 1);
    viewer.scene.add(viewer.ambientLight);
    viewer.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    viewer.directionalLight.rotation.x = Math.PI * 0.5;
    viewer.directionalLight.rotation.y = Math.PI * 0.25;
    viewer.scene.add(viewer.directionalLight);
}

function setupModel(viewer, src, scale){

    const loader = new GLTFLoader().setPath( './' );
    loader.load( src, async function ( gltf ) {

        viewer.model = gltf.scene;
        await viewer.renderer.compileAsync( viewer.model, viewer.camera, viewer.scene );
        if(scale) viewer.model.scale.set(scale, scale, scale);
        viewer.scene.add( viewer.model );
        viewer.render();

    } );
}

function setupAppearance(viewer, appearance){
    function applyAppearanceItem(key, value){
        switch(key){
            case 'background-color':
                if(value == 'transparent') {
                    viewer.renderer.setClearColor(0x000000, 0);
                } else {
                    viewer.scene.background = new THREE.Color(value);
                }
                
                break;
            case 'ambient-color':
                viewer.ambientLight.color = new THREE.Color(value);
                break;
            case 'ambient-intensity':
                viewer.ambientLight.intensity = parseFloat(value);
                break;
            case 'directional-color':
                viewer.directionalLight.color = new THREE.Color(value);
                break;
            case 'directional-intensity':
                viewer.directionalLight.intensity = parseFloat(value);
                break;
            default:
                break;
        }
    }

    if(appearance == null) return;
    let appearanceArray = appearance.split(';');

    appearanceArray.forEach(appearance => {
        if(appearance == '') return;
        let key = appearance.split(':')[0].trim();
        let value = appearance.split(':')[1].trim();
        applyAppearanceItem(key, value);
    });
}

function setupAnimation(viewer, behavior){
    // Default Render function
    viewer.render = function () {
        requestAnimationFrame(viewer.render);
        viewer.renderer.render(viewer.scene, viewer.camera);
    };
    // Custom Render function
    if(behavior) {
        const behaviorSettings = behavior.split(' ');
        switch(behaviorSettings[0])
        {
            case 'rotate':
                viewer.render = function () {
                    requestAnimationFrame(viewer.render);
                    if(viewer.model){
                        viewer.model.rotation.y += parseFloat(behaviorSettings[1]);
                    }
                    viewer.renderer.render(viewer.scene, viewer.camera);
                };
                viewer.render();
                break;
            case 'orbit':
                const controls = new OrbitControls(viewer.camera, viewer.renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.25;
                controls.enableZoom = true;
                controls.enablePan = false;
                controls.minDistance = parseFloat(behaviorSettings[1]);
                controls.maxDistance = parseFloat(behaviorSettings[2]);
                controls.update();
                viewer.render = function () {
                    requestAnimationFrame(viewer.render);
                    controls.update();
                    viewer.renderer.render(viewer.scene, viewer.camera);
                };
                viewer.render();
                break;
            default:
                break;
        }

        

    }
}

// Create a viewer for each model element
document.addEventListener('DOMContentLoaded', function() {
    // Select all model elements
    const modelElements = document.querySelectorAll('model');

    modelElements.forEach(modelElement => {
        createViewer(modelElement);
    });
});

