import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Planet class for Team B
export class PlanetB {
    constructor(scene, orbitRadius, orbitSpeed) {
        this.scene = scene;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.angle = Math.random() * Math.PI * 2;

        // Create planet group
        this.group = new THREE.Group();
        this.scene.add(this.group);

        // --- STEP 1: Create Planet ---
        // Radius between 1.5 and 2 (using 1.8)
        const geometry = new THREE.SphereGeometry(1.8, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: 0x00f2ff, // Cyan/Ice color
            metalness: 0.7,
            roughness: 0.2,
            transparent: true,
            opacity: 0.9
        });
        
        this.planetMesh = new THREE.Mesh(geometry, material);
        this.planetMesh.castShadow = true;
        this.planetMesh.receiveShadow = true;
        this.group.add(this.planetMesh);

        // --- STEP 2: Orbiting Moons ---
        this.moons = [];
        this.createMoon(0.4, 3.5, 0.02, 0xffffff); // Moon 1
        this.createMoon(0.2, 5, 0.035, 0xaaaaaa);  // Moon 2

        // --- STEP 3: Load Blender Models ---
        this.loader = new GLTFLoader();
        this.interactableModels = []; // For raycasting

        // Example: Loading a "critter" or "prop"
        // Replace 'path/to/your/model.glb' with your actual asset path
        /*
        this.loader.load('models/ice_crystal.glb', (gltf) => {
            const model = gltf.scene;
            model.scale.set(0.2, 0.2, 0.2);
            
            // Positioning on surface: Use spherical coordinates or set distance to planet radius
            model.position.set(0, 1.8, 0); 
            model.castShadow = true;
            model.receiveShadow = true;
            
            this.group.add(model);
            this.interactableModels.push(model);
        });
        */

        // Raycaster for interactions
        this.raycaster = new THREE.Raycaster();
    }

    createMoon(radius, dist, speed, color) {
        const moonGeo = new THREE.SphereGeometry(radius, 16, 16);
        const moonMat = new THREE.MeshStandardMaterial({ color: color });
        const moon = new THREE.Mesh(moonGeo, moonMat);
        
        moon.castShadow = true;
        moon.receiveShadow = true;
        
        // Custom properties for animation
        moon.userData = {
            distance: dist,
            speed: speed,
            angle: Math.random() * Math.PI * 2
        };
        
        this.group.add(moon);
        this.moons.push(moon);
    }

    update(delta) {
        // Orbit around sun
        this.angle += this.orbitSpeed * delta * 30;
        this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
        this.group.position.z = Math.sin(this.angle) * this.orbitRadius;
        
        // Rotate planet
        this.group.rotation.y += delta * 0.5;

        // --- STEP 2 (Update): Moon Orbits ---
        this.moons.forEach(moon => {
            moon.userData.angle += moon.userData.speed;
            moon.position.x = Math.cos(moon.userData.angle) * moon.userData.distance;
            moon.position.z = Math.sin(moon.userData.angle) * moon.userData.distance;
        });

        // --- STEP 4 (Update): Animation on Click ---
        // If you have an animation flag, update it here (e.g., jumping critters)
    }

    click(mouse, scene, camera) {
        // --- STEP 4: Raycasting ---
        this.raycaster.setFromCamera(mouse, camera);
        
        // Check intersections with the planet and models
        const intersects = this.raycaster.intersectObjects(this.group.children, true);

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            
            // Basic "Jump" animation using a simple Scale Pulse
            clickedObject.scale.set(1.5, 1.5, 1.5);
            setTimeout(() => {
                clickedObject.scale.set(1, 1, 1);
            }, 200);

            console.log("Team B Planet or Model clicked!", clickedObject);
        }
    }
}