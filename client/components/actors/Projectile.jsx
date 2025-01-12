/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MauModel (https://sketchfab.com/MauModel)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/grenade-launcher-projectile-downloadable-27f55371b78d497ba0f7654dbe3c913c
title: Grenade Launcher Projectile (Downloadable)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {Line, Vector3} from "three";

let justFired = true;

const Projectile = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF(
    "/assets/grenade_launcher_projectile_downloadable.glb"
  );
  const { camera } = useThree();
  
  
  useFrame(() => {
    if (justFired) {
        const vector = new Vector3(0, 0, -0.8).unproject(camera);
        const [x, y, z] = vector
        ref.current.position.set(x, y, z);
        justFired = false;
    } else {
        const [x, y, z] = ref.current.position
        //const [_x, _y, _z] = ref.current.rotation
        const b = new Vector3(1,0,0);
        const delta = b.applyEuler(ref.current.rotation);
       // console.log(_x);
       // console.log(Math.PI);
        //console.log(Math.sin());
        const velocity = 0.1;
        ref.current.position.set(x + velocity * delta.x, y + velocity * delta.y, z + velocity * delta.z);
        /*console.log(x,y,z);
        console.log(_x, _y, _z);
        console.log(ref.current);*/
      //  ref.current.position.set(x + velocity * Math.cos(_x), y, z);
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
    <group {...props} ref={ref} dispose={null}>
      <group
        position={[0, -0.01, 0.01]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[1816.62, 1362.69, 0.64]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.89, 0.89, 1.08]}
          >
            <group position={[-335.49, 0, -569.64]} rotation={[0, 0, -0.09]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Projectile_BULLET_0.geometry}
                material={materials.BULLET}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Projectile;

useGLTF.preload("/assets/grenade_launcher_projectile_downloadable.glb");
