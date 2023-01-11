import React, { useEffect, useRef, useState, useTexture } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, usePlane, useSphere } from '@react-three/cannon'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

//import Hall from './Hall';
import Ground from './Ground';
import Player from './Player';

const Game = (props) => {
  return (
            <div id="canvas-container" style={{height: window.innerHeight, width: window.innerWidth}}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <spotLight
                    angle={0.12}
                    penumbra={0.1}
                    position={[10, 0, -10]}
                    intensity={40}
                    onUpdate={(self) => {
                    self.target.position.set(-10, 0, 0)
                    self.target.updateMatrixWorld()
                    }}
                />
                <Physics iterations={5} gravity={[0, -30, 0]} >
                  <Player position={[0, 2, 1.5]} />
                  <Ground rotation={[-Math.PI / 2, 0, 0]} userData={{ id: 'floor' }} />
                </Physics>
                <OrbitControls/>
            </Canvas>
            </div>
        );
}

export default Game;
