
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface WireframeGlobeProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const WireframeGlobe: React.FC<WireframeGlobeProps> = ({
  width = 200,
  height = 200,
  color = "#FF9100",
  className = "",
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameId = useRef<number>();

  useEffect(() => {
    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearAlpha(0);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.z = 3.6;

    // Orange wireframe grid
    const globeGroup = new THREE.Group();

    // Longitude lines
    const longSegments = 12;
    for (let i = 0; i < longSegments; i++) {
      const phi = (i / longSegments) * Math.PI * 2;
      const geometry = new THREE.BufferGeometry();
      const points = [];
      for (let j = 0; j <= 64; j++) {
        const theta = (j / 64) * Math.PI;
        const x = Math.sin(theta) * Math.cos(phi);
        const y = Math.cos(theta);
        const z = Math.sin(theta) * Math.sin(phi);
        points.push(new THREE.Vector3(x, y, z));
      }
      geometry.setFromPoints(points);
      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity: 0.7,
          linewidth: 3 // This works in some environments, fallback below.
        })
      );
      globeGroup.add(line);
    }

    // Latitude lines
    const latSegments = 6;
    for (let i = 1; i < latSegments; i++) {
      const theta = (i / latSegments) * Math.PI;
      const geometry = new THREE.BufferGeometry();
      const points = [];
      for (let j = 0; j <= 128; j++) {
        const phi = (j / 128) * Math.PI * 2;
        const x = Math.sin(theta) * Math.cos(phi);
        const y = Math.cos(theta);
        const z = Math.sin(theta) * Math.sin(phi);
        points.push(new THREE.Vector3(x, y, z));
      }
      geometry.setFromPoints(points);
      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity: 0.7,
          linewidth: 4 // more visible
        })
      );
      globeGroup.add(line);
    }

    // Optional: glow aura - an outer, highly transparent sphere with a little blur
    // (three.js has no blur natively – can fake this with additional slightly bigger, very faint lines)
    for (let i = 0; i < 2; i++) {
      const geo = new THREE.SphereGeometry(1.05 + 0.06 * i, 32, 18);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.09 - i * 0.03,
        wireframe: true
      });
      const mesh = new THREE.Mesh(geo, mat);
      globeGroup.add(mesh);
    }

    scene.add(globeGroup);

    // Animation Loop
    const animate = () => {
      // Animate around all 3 axes for a futuristic look
      globeGroup.rotation.y += 0.008;
      globeGroup.rotation.x += 0.004;
      globeGroup.rotation.z += 0.0023;
      renderer.render(scene, camera);
      frameId.current = requestAnimationFrame(animate);
    };
    animate();

    // Attach to DOM
    const mount = mountRef.current;
    mount?.appendChild(renderer.domElement);

    // Clean up
    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      renderer.dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      // Clean all geometries and materials
      globeGroup.traverse((obj) => {
        // @ts-ignore
        if (obj.geometry) obj.geometry.dispose();
        // @ts-ignore
        if (obj.material) obj.material.dispose();
      });
    };
    // eslint-disable-next-line
  }, [width, height, color]);

  return (
    <div
      ref={mountRef}
      style={{
        width,
        height,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1,
        filter: "drop-shadow(0 0 20px #FF910088) drop-shadow(0 0 40px #FF910044)" // soft orange haze
      }}
      className={className}
      aria-hidden="true"
    />
  );
};

export default WireframeGlobe;

