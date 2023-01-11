import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export const renderCanvasMobile = (canvas) => {
  // SIZES
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const handleResize = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  window.addEventListener('resize', handleResize);

  // ---------------------------------------------
  // LOADERS
  const fontLoader = new FontLoader();
  const gltfLoader = new GLTFLoader();

  // SCENE
  const scene = new THREE.Scene();
  let nimbusText = null;
  let nimbusLogo = null;

  // 3d nimbus text
  if (sizes.width > 450) {
    fontLoader.load('./fonts/BatmanForeverAlternate_Regular.json', (font) => {
      let geometry = new TextGeometry('NIMBUS 2K22', {
        font: font,
        size: 0.5,
        height: 0.05,
        curveSegments: 5,
        bevelEnabled: true,
        bevelOffset: 0,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelSegments: 3,
      });

      nimbusText = new THREE.Mesh(geometry, [
        new THREE.MeshStandardMaterial({
          metalness: 0.8,
          roughness: 0.3,
          color: '#5ac8fa',
        }),
        new THREE.MeshStandardMaterial({
          metalness: 0.8,
          roughness: 0.3,
          color: '#5ac8fa',
        }),
        new THREE.MeshStandardMaterial({
          metalness: 0.8,
          roughness: 0.3,
          color: '#5ac8fa',
        }),
      ]);
      nimbusText.castShadow = true;
      nimbusText.position.set(-2.8, 1.5, 0.5);
      scene.add(nimbusText);
    });
  }

  // particles canvas
  const p_geo = new THREE.BufferGeometry(1, 32, 32);
  const p_cnt = 600;

  const p_pos_array = new Float32Array(p_cnt * 3);
  let p_color_array = new Float32Array(p_cnt * 3);

  for (let i = 0; i < p_cnt * 3; i++) {
    p_pos_array[i] = (Math.random() - 0.5) * 15;
    p_color_array[i] = Math.random();
  }
  p_geo.setAttribute('position', new THREE.BufferAttribute(p_pos_array, 3));
  p_geo.setAttribute('color', new THREE.BufferAttribute(p_color_array, 3));
  const p_mat = new THREE.PointsMaterial({
    size: 0.04,
    sizeAttenuation: true,
    // color: '#45dbda',
  });
  p_mat.vertexColors = true;
  p_mat.depthWrite = false;
  p_mat.transparent = true;
  p_mat.blending = THREE.AdditiveBlending;
  const particles = new THREE.Points(p_geo, p_mat);
  scene.add(particles);

  // nimbus logo
  gltfLoader.load('./models/nimbus-logo.glb', (gltf) => {
    nimbusLogo = gltf.scene;
    nimbusLogo.position.x = 0;
    nimbusLogo.position.y = 0;
    nimbusLogo.position.z = 0;
    nimbusLogo.scale.set(0.7, 0.7, 1);
    scene.add(nimbusLogo);
  });

  // lights
  const sun = new THREE.PointLight('#fff', 0.5);
  sun.position.x = 0;
  sun.position.y = 5;
  sun.position.z = 10;
  scene.add(sun);

  const star = new THREE.PointLight('#6933ff', 0.5);
  star.position.x = 0;
  star.position.y = 5;
  star.position.z = 10;
  scene.add(star);

  const light3 = new THREE.PointLight('#5ac8fa', 0.5);
  light3.position.x = 0;
  light3.position.y = 0;
  light3.position.z = -2;
  scene.add(light3);

  const cursorLight = new THREE.PointLight('#007aff', 1);
  cursorLight.position.x = 0;
  cursorLight.position.y = 0;
  cursorLight.position.z = 5;
  scene.add(cursorLight);

  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    1,
    100
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 4;

  // RENDER
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas,
    antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(new THREE.Color('#000000'));

  // ANIMATE
  const clock = new THREE.Clock();
  let ot = clock.getElapsedTime();

  const tick = () => {
    const t = clock.getElapsedTime();
    const dt = t - ot;
    ot = t;

    star.position.z = Math.sin(t) * 10;
    star.position.x = Math.cos(t) * 10;
    star.position.y = Math.cos(2 * t) * 10;

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  };

  tick();

  return () => {
    // cleanup
    window.removeEventListener('resize', handleResize);
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
  };
};
