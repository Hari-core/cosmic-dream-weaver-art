
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Box = () => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 3
      ref.current.rotation.y += delta / 3
    }
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FFA500" wireframe />
    </mesh>
  )
}

export const ProjectDialogBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={Math.PI} />
        <Box />
      </Canvas>
    </div>
  )
}
