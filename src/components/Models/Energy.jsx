import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export function Energy(props) {
    const groupRef1 = useRef();
    const groupRef2 = useRef();
    const groupRef3 = useRef();
    const groupRef4 = useRef();
    const { nodes, materials } = useGLTF("/models/energy.glb");
    useFrame((state) => {
        groupRef1.current.rotation.z = groupRef1.current.rotation.z + 0.01
        groupRef2.current.rotation.z = groupRef2.current.rotation.z + 0.01
        groupRef3.current.rotation.z = groupRef3.current.rotation.z + 0.01
        groupRef4.current.rotation.y = groupRef4.current.rotation.y + 0.01
    })

    return (
        <group {...props} dispose={null} scale={5} >
            <group>
                <group rotation={[-Math.PI / 2, 0, -Math.PI / 7]}>
                    <group>
                        <group rotation={[Math.PI / 2, 2, 0]}>
                            <group position={[0, -0.0224, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={groupRef1}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_4.geometry}
                                    material={materials["Material.004"]}
                                />
                                <group
                                    position={[0.3586, -0.3133, 0.0025]}
                                    rotation={[Math.PI, 0, -Math.PI / 4]}
                                    scale={0.1741}
                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_6.geometry}
                                        material={materials.Bulb_Info}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_8.geometry}
                                        material={materials.Bulb_Info}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_10.geometry}
                                        material={materials.Bulb_Info}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_12.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_14.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_16.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_18.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group scale={0.0357}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_20.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group
                                    position={[0.0025, 0.0016, -0.4211]}
                                    rotation={[Math.PI / 2, 0, 0]}
                                    scale={1.7447}
                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_22.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group position={[0, 0, 0.0101]}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_24.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group scale={0.0099}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_26.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_28.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_30.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_32.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                                <group
                                    rotation={[-Math.PI, 0, 0]}
                                    scale={[-0.0419, 0.0419, 0.0419]}
                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_34.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                            </group>
                            <group position={[0, -0.2845, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_36.geometry}
                                    material={materials["Material.003"]}
                                />
                            </group>
                            <group
                                position={[0, -0.0224, 0]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={0.2502}
                            >
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_38.geometry}
                                    material={materials["Material.006"]}
                                />
                            </group>
                            <group
                                position={[0, 2.3567, 0.2591]}
                                scale={[0.4794, 0.4794, 0.494]}
                            >
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_40.geometry}
                                    material={materials["Material.004"]}
                                />
                                <group
                                    position={[0, -0.2441, -0.5245]}
                                    rotation={[Math.PI / 2, 0, 0]}
                                    scale={[0.0531, 0.0515, 0.0531]}
                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_42.geometry}
                                        material={materials.Bulb_Normal}
                                    />
                                </group>
                            </group>
                            <group

                                position={[-6.2437, -6.1622, -2.475]}
                                rotation={[0.2938, 1.1175, -0.2656]}
                            >
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_52.geometry}
                                    material={materials["Material.007"]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_53.geometry}
                                    material={materials["Material.010"]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_54.geometry}
                                    material={materials["Material.010"]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_55.geometry}
                                    material={materials["Material.010"]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_56.geometry}
                                    material={materials["Material.010"]}
                                />
                            </group>
                            <group
                                position={[0, 1.482, 0]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={0.4794}
                            >
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_44.geometry}
                                    material={materials["Glass.001"]}
                                />
                                <group position={[0, 0, -0.1629]} rotation={[0, 0, 1.5885]}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_46.geometry}
                                        material={materials.Bulb_Info}
                                    />
                                </group>
                                <group
                                    position={[0, 0, -0.3303]}
                                    rotation={[Math.PI / 2, -0.0723, 0]}
                                    scale={2.0861}
                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_48.geometry}
                                        material={materials.Bulb_Info}
                                    />
                                </group>
                            </group>
                            <group ref={groupRef4}>
                                <group position={[0, 1.4767, 0]} scale={0.4794}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_50.geometry}
                                        material={materials.Glass_2}
                                    />
                                </group>
                                <group

                                    position={[0, 0.0191, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.6145}
                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_58.geometry}
                                        material={materials["Material.002"]}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_59.geometry}
                                        material={materials.Material}
                                    />
                                    <group>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_61.geometry}
                                            material={materials.Bulb_Normal}
                                        />
                                    </group>
                                    <group>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_63.geometry}
                                            material={materials.Bulb_Normal}
                                        />
                                    </group>
                                    <group>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_65.geometry}
                                            material={materials.Bulb_Normal}
                                        />
                                    </group>
                                    <group>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_67.geometry}
                                            material={materials.Bulb_Normal}
                                        />
                                    </group>
                                </group>
                                <group position={[0, 2.2397, 0]} rotation={[Math.PI / 2, 0, 0]} ref={groupRef2}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_69.geometry}
                                        material={materials["Material.008"]}
                                    />
                                    <group>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_71.geometry}
                                            material={materials.Bulb_Normal}
                                        />
                                    </group>
                                </group>
                                <group
                                    position={[0, 0.5901, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.4794}

                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_73.geometry}
                                        material={materials["Material.002"]}
                                    />
                                </group>
                                <group position={[0, 2.1876, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={groupRef3}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_75.geometry}
                                        material={materials["Material.004"]}
                                    />
                                    <group>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_77.geometry}
                                            material={materials.Bulb_Normal}
                                        />
                                    </group>
                                </group>
                                <group
                                    position={[0, 0.0191, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.4794}
                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_79.geometry}
                                        material={materials["Material.005"]}
                                    />
                                </group>
                                <group
                                    position={[-0.0014, 1.4351, -0.002]}
                                    rotation={[-Math.PI, -0.168, -Math.PI]}
                                    scale={[1, 1.14, 1]}
                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_81.geometry}
                                        material={materials.Material}
                                    />
                                </group>
                                <group
                                    position={[0.626, 2.552, 0.4302]}
                                    rotation={[-1.847, 1.0013, 1.8555]}
                                    scale={0.2731}

                                >
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_83.geometry}
                                        material={materials.Moth}
                                    />
                                </group>
                                <group
                                    position={[0, -0.0224, 0]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                />
                                <group
                                    position={[0, -0.0224, 0]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                    scale={0.0357}
                                />
                                <group
                                    position={[0, 0.0191, 0]}
                                    rotation={[0, 0, -Math.PI / 2]}
                                    scale={0.6145}
                                />
                                <group
                                    position={[0, -0.0224, 0]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                    scale={0.0099}
                                />
                                <group
                                    position={[0, -0.0224, 0]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                />
                                <group
                                    position={[0, -0.0224, 0]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                />
                                <group
                                    position={[0, -0.0224, 0]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                />
                                <group
                                    position={[0, -0.0224, 0]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                    scale={-0.0419}
                                />
                                <group
                                    position={[0, 2.2397, 0]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                    scale={0.0254}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/models/energy.glb");
