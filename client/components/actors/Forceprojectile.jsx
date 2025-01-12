/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Adamante (https://sketchfab.com/Adamant6686)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/spherical-hex-force-field-bb80cd68b5a74bd989cb18c186192c9b
title: Spherical hex force field
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {Line, Vector3} from "three";

let justFired = true;

const Forceprojectile = (props) => {
  const ref = useRef();

  const { nodes, materials } = useGLTF("/assets/spherical_hex_force_field.glb");
  const { camera } = useThree();
  
  useFrame(() => {
    if (justFired) {
        const vector = new Vector3(0, 0, -0.8).unproject(camera);
        const [x, y, z] = vector
        ref.current.position.set(x, y, z);
        justFired = false;
    } else {
        const [x, y, z] = ref.current.position
        const b = new Vector3(1,0,0);
        const delta = b.applyEuler(ref.current.rotation);
        const velocity = 0.1;
        ref.current.position.set(x + velocity * delta.x, y + velocity * delta.y, z + velocity * delta.z);
        
    }
    
    /*const [x, y, z] = ref.current.position*/
    
   // ref.current.position.set();
   // ref.current.velocity.set(0, 0, 0)
    //console.log(state);
    /*
    dot.current.position.set(x, y, z);
    lines.current.position.set(x, y, z);
    lines.current.rotation.set(camera.rotation._x, camera.rotation._y, camera.rotation._z, camera.rotation._order);*/
  }
  )
  return (
    <group {...props} ref={ref} dispose={null} scale={[0.01, .01, .01]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[8307.84, 3486.8, 4515.44]}
            rotation={[Math.PI, 0.78, 2.8]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_6_M_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_6_A_1.geometry}
            material={materials.material_1}
          />
        </group>
      </group>
    </group>
  );
}

export default Forceprojectile;

useGLTF.preload("/assets/spherical_hex_force_field.glb");
