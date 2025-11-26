import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';
import * as THREE from 'three';

// Fix for TypeScript error: Property 'primitive' does not exist on type 'JSX.IntrinsicElements'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any;
    }
  }
}

function Model(props: any) {
  // Chargement du fichier depuis l'URL distante
  const { scene } = useGLTF('https://raw.githubusercontent.com/Swyz974/asset/main/chaise-massage.glb');
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Récupération de la position de la souris (entre -1 et 1)
      const mouseX = state.mouse.x;
      const mouseY = state.mouse.y;

      // Interpolation linéaire (Lerp) pour un mouvement fluide
      // Rotation Y (gauche/droite)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouseX * 0.5, 0.1);
      
      // Rotation X (haut/bas) - Ajout d'un offset (0.5) pour simuler une vue "du dessus" par défaut
      // On incline la chaise vers l'avant pour voir l'assise
      const initialTilt = 0.5; 
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, initialTilt - (mouseY * 0.2), 0.1);
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
}

export default function ChairModel() {
  return (
    <div className="w-full h-full min-h-[500px] cursor-move">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        {/* adjustCamera: 1.3 pour zoomer un peu plus (plus la valeur est basse, plus on zoome) */}
        <Stage environment="city" intensity={0.5} adjustCamera={1.3}>
          <Model />
        </Stage>
      </Canvas>
    </div>
  );
}

// Préchargement du modèle pour éviter les délais
useGLTF.preload('https://raw.githubusercontent.com/Swyz974/asset/main/chaise-massage.glb');