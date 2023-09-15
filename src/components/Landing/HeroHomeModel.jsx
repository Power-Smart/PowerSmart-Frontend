import React, { Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import { Home } from '../Models/Home'
import Controller from '../Models/Controller'

const HeroHomeModel = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        z: 0
    });
    // [3, -20, 30]
    return (
        <>
            {/* <Controller position={position} setPosition={setPosition} /> */}
            <Canvas camera={{ position: [10, 10, 15], fov: 100 }}>
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                    <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
                        <Home position={[0, 0, 0]} pos={position} />
                        {/* <Home position={[-7, -6, -1]} /> */}
                        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
                    </group>
                    <Environment preset="city" />
                </Suspense>
                <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
            </Canvas>
        </>
    )
}

export default HeroHomeModel