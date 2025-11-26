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
  const { scene } = useGLTF('https://serialmasseur.vercel.app/chaise-massage.glb');
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Récupération de la position de la souris (entre -1 et 1)
      const mouseX = state.mouse.x;
      const mouseY = state.mouse.y;

      // Interpolation linéaire (Lerp) pour un mouvement fluide
      // La chaise pivote sur l'axe Y (gauche/droite) en suivant la souris
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouseX * 0.5, 0.1);
      
      // Légère inclinaison sur l'axe X (haut/bas)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -mouseY * 0.1, 0.1);
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
}

export default function ChairModel() {
  return (
    <div className="w-full h-[500px] cursor-move">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        {/* Stage gère l'éclairage et le centrage automatique. adjustCamera=1.4 dézoome légèrement pour tout voir */}
        <Stage environment="city" intensity={0.5} adjustCamera={1.4}>
          <Model />
        </Stage>
      </Canvas>
    </div>
  );
}

// Préchargement du modèle pour éviter les délais
useGLTF.preload('https://serialmasseur.vercel.app/chaise-massage.glb');