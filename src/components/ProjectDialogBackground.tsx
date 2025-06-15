import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'

const Particles = (props: any) => {
  const ref = useRef<THREE.Points>(null!)
  
  const points = useMemo(() => {
    const numPoints = 5000;
    const p = new Float32Array(numPoints * 3);
    for (let i = 0; i < p.length; i++) {
      p[i] = (Math.random() - 0.5) * 7.5;
    }
    return p;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15
      ref.current.rotation.y -= delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} {...props}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          color="#FFA500"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
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
