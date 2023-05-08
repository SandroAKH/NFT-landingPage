import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import men from "../../assets/3d/man.glb";
import './man3d.scss';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';

const PageLocations = {
  homepage: {
    light: new THREE.SpotLight(0xAB452F, 3),
    light1: new THREE.SpotLight(0xAB452F, 2),
    light2: new THREE.SpotLight(0xAB452F, 2),
    cameraPositions: { x: 0, y: 0.81, z: 1.3 },
    modelRotation: 0.4,

    nextCameraPositions: { x: 0.3, y: 0.8, z: 1.8 },
    nextModelRotation: 0,
  },
  roadmap: {
    light: new THREE.SpotLight(0xAB452F, 3),
    light1: new THREE.SpotLight(0xAB452F, 2),
    light2: new THREE.SpotLight(0xAB452F, 2),
    cameraPositions: { x: 0.3, y: 0.8, z: 1.8 },
    modelRotation: 0,

    nextCameraPositions: { x: 0.18, y: 0.872, z: 1 },
    nextModelRotation: 0.4,
  },
  team: {
    light: new THREE.SpotLight(0xAB452F, 3),
    light1: new THREE.SpotLight(0xAB452F, 2),
    light2: new THREE.SpotLight(0xAB452F, 2),
    cameraPositions: { x: 0.18, y: 0.872, z: 1 },
    modelRotation: 0.4,

    nextCameraPositions: { x: 0.24, y: 0.872, z: 1 },
    nextModelRotation: 0.4,
  },
  meta: {
    light: new THREE.SpotLight(0x222222, 1),
    light1: new THREE.SpotLight(0x222222, 1),
    light2: new THREE.SpotLight(0x222222, 1),
    cameraPositions: { x: 0.24, y: 0.872, z: 1 },
    modelRotation: 0.4,
  },
};

export const Man3D = ({ curentPage, nextPage, position }) => {
  const [model, setModel] = useState();
  const [scene, setScene] = useState();
  const [camera, setCamera] = useState();
  const [loader, setLoader] = useState();
  const [renderer, setRenderer] = useState();
  const [composer, setComposer] = useState();

  const animate = () => {
    requestAnimationFrame(animate);

    composer.render(scene, camera);
  };

  useEffect(() => {
    if (
      !camera ||
      !nextPage ||
      !model
    ) return;

    const currentProps = PageLocations[curentPage];
    const nextProps = PageLocations[nextPage];

    if (!currentProps || !nextProps) return;

    const isDown = (curentPage === 'homepage' && nextPage === 'roadmap') || (curentPage === 'roadmap' && nextPage === 'team') || (curentPage === 'team' && nextPage === 'meta');

    let height;
    if (position === 'down') {
      height = document.getElementById(curentPage).scrollHeight;
    } else if (position === 'up' && !isDown) {
      height = document.getElementById(curentPage).scrollHeight;
    } else {
      height = document.getElementById(curentPage).previousSibling.scrollHeight;
    }

    const onScroll = () => {
      let scrollTop;
      if (position === 'down') {
        scrollTop = document.getElementById(curentPage).offsetTop;
      } else if (position === 'up' && !isDown) {
        scrollTop = document.getElementById(curentPage).offsetTop;
      } else {
        scrollTop = document.getElementById(nextPage).offsetTop;
      }
      scrollTop = document.documentElement.scrollTop - scrollTop;

      if (isDown && position === 'down') {
        camera.position.x = currentProps.cameraPositions.x + scrollTop / height * (nextProps.cameraPositions.x - currentProps.cameraPositions.x);
        camera.position.y = currentProps.cameraPositions.y + scrollTop / height * (nextProps.cameraPositions.y - currentProps.cameraPositions.y);
        camera.position.z = currentProps.cameraPositions.z + scrollTop / height * (nextProps.cameraPositions.z - currentProps.cameraPositions.z);
        model.rotation.y = currentProps.modelRotation + scrollTop / height * (nextProps.modelRotation - currentProps.modelRotation);
      } else if (isDown && position === 'up') {
        camera.position.x = nextProps.cameraPositions.x + scrollTop / height * (nextProps.cameraPositions.x - currentProps.cameraPositions.x);
        camera.position.y = nextProps.cameraPositions.y + scrollTop / height * (nextProps.cameraPositions.y - currentProps.cameraPositions.y);
        camera.position.z = nextProps.cameraPositions.z + scrollTop / height * (nextProps.cameraPositions.z - currentProps.cameraPositions.z);
        model.rotation.y = nextProps.modelRotation + scrollTop / height * (nextProps.modelRotation - currentProps.modelRotation);
      } else if (!isDown && position === 'up') {
        camera.position.x = currentProps.cameraPositions.x + scrollTop / height * (currentProps.nextCameraPositions.x - currentProps.cameraPositions.x);
        camera.position.y = currentProps.cameraPositions.y + scrollTop / height * (currentProps.nextCameraPositions.y - currentProps.cameraPositions.y);
        camera.position.z = currentProps.cameraPositions.z + scrollTop / height * (currentProps.nextCameraPositions.z - currentProps.cameraPositions.z);
        model.rotation.y = currentProps.modelRotation + scrollTop / height * (currentProps.nextModelRotation - currentProps.modelRotation);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [camera, curentPage, nextPage, position]);

  useEffect(() => {
    setScene(new THREE.Scene());
    setCamera(new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10));

    setLoader(new GLTFLoader());
    setRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: document.getElementById('man') }));
  }, []);

  useEffect(() => {
    if (!scene) return;

    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    loader.load(men, function (gltf) {
      setModel(gltf.scene);
      gltf.scene.scale.set(0.005, 0.005, 0.005);
      scene.add(gltf.scene);
    }, undefined, function (error) {
      console.error(error);
    });
  }, [scene]);

  useEffect(() => {
    const pageModel = PageLocations[curentPage];

    if (!pageModel || !model) return;

    pageModel.light.position.set(10, 0, -20);
    pageModel.light1.position.set(-20, 0, -50);
    pageModel.light2.position.set(0, 5, -20);
    scene.add(pageModel.light);
    scene.add(pageModel.light1);
    scene.add(pageModel.light2);
    model.rotation.y = pageModel.modelRotation;
    camera.position.set(pageModel.cameraPositions.x, pageModel.cameraPositions.y, pageModel.cameraPositions.z);
    camera.setFocalLength(100);

  }, [model]);

  useEffect(() => {
    if (!renderer) return;

    setComposer(new EffectComposer(renderer));
  }, [renderer]);

  useEffect(() => {
    if (!composer) return;

    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new GlitchPass());

    requestAnimationFrame(animate);
  }, [composer]);

  return (
    <canvas id="man"></canvas>
  );
};
