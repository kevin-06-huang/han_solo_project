/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Polyperkon (https://sketchfab.com/polyperkon)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/star-wars-e-11-blaster-6b71af2912e34674bbd264ee676faa0d
title: Star Wars E-11 Blaster
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Blaster = (props) => {
  const { nodes, materials } = useGLTF("/assets/blaster.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -24.72, -28.08]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface2908_phong2_0.geometry}
            material={materials.phong2}
          />
        </group>
      </group>
    </group>
  );
}

export default Blaster;

useGLTF.preload("/assets/blaster.glb");
