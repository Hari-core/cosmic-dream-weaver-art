
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useState, useMemo } from 'react'

const Particles = (props: any) => {
  const ref = useRef<THREE.Points>(null!)
  
  const points = useMemo(() => {
    const p = new Array(5000).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
    return new Float32Array(p);
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15
    ref.current.rotation.y -= delta / 20
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#FFA500"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export const ProjectDialogBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  )
}
