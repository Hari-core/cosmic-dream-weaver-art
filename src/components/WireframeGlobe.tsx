
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
    camera.position.z = 3.5;

    // Wireframe Sphere Geometry
    const geometry = new THREE.SphereGeometry(1, 32, 18);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color,
      opacity: 0.55,
      transparent: true,
      linewidth: 1.2,
    });
    const sphere = new THREE.LineSegments(wireframe, lineMaterial);
    scene.add(sphere);

    // Subtle Aura Glow: add more lines to imitate the glow aura (optional, can remove if too busy)
    // const glowGeometry = new THREE.SphereGeometry(1.06, 32, 18);
    // const glowWireframe = new THREE.WireframeGeometry(glowGeometry);
    // const glowMaterial = new THREE.LineBasicMaterial({
    //   color,
    //   opacity: 0.10,
    //   transparent: true,
    //   linewidth: 1,
    // });
    // const glow = new THREE.LineSegments(glowWireframe, glowMaterial);
    // scene.add(glow);

    // Animation Loop
    function animate() {
      sphere.rotation.y += 0.009;
      sphere.rotation.x += 0.003;
      renderer.render(scene, camera);
      frameId.current = requestAnimationFrame(animate);
    }
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
      geometry.dispose();
      wireframe.dispose();
      lineMaterial.dispose();
      // if (glowMaterial) glowMaterial.dispose();
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
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1,
      }}
      className={className}
      aria-hidden="true"
    />
  );
};

export default WireframeGlobe;
