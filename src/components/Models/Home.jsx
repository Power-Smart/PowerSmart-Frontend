import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Home(props) {

  const { nodes, materials } = useGLTF('/models/home.glb')
  return (
    <group {...props} dispose={null}>
      <group position={props.position} rotation={[-Math.PI / 2, 0, 0]} scale={0.45}>
        {/* <group position={[-0.006, 0, 0.006]} rotation={[-Math.PI / 2, 0, 0]}> */}
        <group rotation={[Math.PI / 2, 0, 0]} position={props.position}>
          <group position={[33.329, 23.081, -3.01]} rotation={[0, -0.002, 0]} scale={[0.013, 0.31, 0.013]}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.zabor} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.zabor} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials.home} position={[27.486, 1.242, -0.205]} rotation={[0, -0.002, 0]} scale={10} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.rama} position={[22.175, 6.55, 9.273]} rotation={[3.142, -1.568, 1.571]} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.tree} position={[47.707, 1.242, 9.977]} rotation={[0, -0.002, 0]} scale={1.91} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.stoyn} position={[40.473, 1.588, -9.954]} rotation={[0, -0.002, 0]} scale={0.329} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.grass} position={[39.727, 1.242, -0.176]} rotation={[0, -0.002, 0]} scale={[4.779, 3.751, 2.88]} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.tikva} position={[46.673, 1.724, -4.276]} rotation={[-Math.PI, 0.75, -Math.PI]} />
          <mesh geometry={nodes.Object_19.geometry} material={materials['svet.001']} position={[43.598, 3.964, -7.491]} rotation={[0, 1.428, 0]} scale={[0.035, 0.111, 0.035]} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.svet} position={[44.449, 1.242, -0.32]} rotation={[-Math.PI, 0.002, Math.PI / 2]} scale={[0.583, 0.583, 0.484]} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.roof} position={[27.486, 1.242, -0.205]} rotation={[0, -0.002, 0]} scale={10} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.sve4i} position={[37.552, 17.153, 10.584]} rotation={[0, -0.002, 0]} scale={0.035} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/home.glb')
