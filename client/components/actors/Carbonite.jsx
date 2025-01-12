/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NSVV3D (https://sketchfab.com/NSVV3D)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/female-frozen-in-carbonite-low-poly-1a929b755fef448a8d36e372b7f1caa1
title: Female Frozen In Carbonite Low Poly
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier"

const Carbonite = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF(
    "/assets/female_frozen_in_carbonite_low_poly.glb"
  );
  return (
    <RigidBody {...props} type="fixed" colliders="cuboid" ref={ref}>
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .FemaleFrozenInCarboniteLowPolyV02_FemaleFrozenInCrabonite_Mat_0
                .geometry
            }
            material={materials.FemaleFrozenInCrabonite_Mat}
          />
        </group>
      </group>
    </group>
    </RigidBody>
  );
}

export default Carbonite;

useGLTF.preload("/assets/female_frozen_in_carbonite_low_poly.glb");