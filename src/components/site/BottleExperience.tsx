import { Environment, useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Rotate3D } from "lucide-react";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { Group } from "three";
import * as THREE from "three";

import perfumeBottleUrl from "@/assets/perfume_bottle.glb?url";
import { Button } from "@/components/ui/button";

const MODELS = [
  { label: "Perfume", url: perfumeBottleUrl },
] as const;

type DragState = {
  active: boolean;
  lastX: number;
  lastY: number;
  targetY: number;
  targetZ: number;
};

function normalizeModel(scene: THREE.Object3D) {
  const nextScene = scene.clone(true);

  const box = new THREE.Box3().setFromObject(nextScene);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDimension = Math.max(size.x, size.y, size.z) || 1;
  const desiredScale = 1.8 / maxDimension;

  nextScene.scale.setScalar(desiredScale);
  const center = box.getCenter(new THREE.Vector3());
  nextScene.position.set(-center.x * desiredScale, -center.y * desiredScale, -center.z * desiredScale);

  nextScene.traverse((obj) => {
    if (!("isMesh" in obj) || !obj.isMesh) return;

    const rawMaterial = obj.material;
    if (Array.isArray(rawMaterial)) {
      rawMaterial.forEach((material) => {
        material.needsUpdate = true;
        if ("envMapIntensity" in material) material.envMapIntensity = 1.35;
        if ("color" in material && material.color) material.color.convertSRGBToLinear();
      });
      return;
    }

    if (!rawMaterial) return;
    rawMaterial.needsUpdate = true;
    if ("envMapIntensity" in rawMaterial) rawMaterial.envMapIntensity = 1.35;
    if ("color" in rawMaterial && rawMaterial.color) rawMaterial.color.convertSRGBToLinear();
  });

  return nextScene;
}

function BottleModel({
  url,
  spinZ,
  drag,
  scrollProgress,
  containerRef,
}: {
  url: string;
  spinZ: boolean;
  drag: React.MutableRefObject<DragState>;
  scrollProgress: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => normalizeModel(scene), [scene]);
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    const bottle = group.current;
    if (!bottle || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerY = containerRect.top + containerRect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const containerProgress = (centerY - viewportCenter) / window.innerHeight;

    const scrollCurveX = 1.6 - scrollProgress * 3.2;
    const floatY = Math.sin(state.clock.elapsedTime * 1.3 + scrollProgress * Math.PI) * 0.18;
    const floatZ = Math.cos(state.clock.elapsedTime * 0.8 + scrollProgress * Math.PI * 0.5) * 0.12;

    bottle.position.x = THREE.MathUtils.damp(bottle.position.x, scrollCurveX + containerProgress * 0.7, 3.8, delta);
    bottle.position.y = THREE.MathUtils.damp(bottle.position.y, floatY, 3.8, delta);
    bottle.position.z = THREE.MathUtils.damp(bottle.position.z, floatZ - 0.2, 3.8, delta);

    bottle.rotation.y = THREE.MathUtils.damp(
      bottle.rotation.y,
      drag.current.targetY + scrollProgress * 1.8,
      4.2,
      delta,
    );

    bottle.rotation.z = THREE.MathUtils.damp(
      bottle.rotation.z,
      drag.current.targetZ + Math.sin(state.clock.elapsedTime * 0.5) * 0.15,
      4.2,
      delta,
    );

    if (!drag.current.active) {
      drag.current.targetY += delta * (0.24 + scrollProgress * 0.18);
      if (spinZ) drag.current.targetZ += delta * 0.58;
    }
  });

  return (
    <group ref={group} rotation={[0.08, -0.48, 0]}>
      <primitive object={clonedScene} />
    </group>
  );
}

export function BottleExperience() {
  const [modelIndex, setModelIndex] = useState(0);
  const [spinZ, setSpinZ] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const drag = useRef<DragState>({
    active: false,
    lastX: 0,
    lastY: 0,
    targetY: -0.5,
    targetZ: 0,
  });

  useEffect(() => {
    const update = () => {
      // Calculate scroll progress based on page height
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? Math.min(1, currentScroll / totalScroll) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const activeModel = MODELS[modelIndex];

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current.active = true;
    drag.current.lastX = event.clientX;
    drag.current.lastY = event.clientY;
    document.body.classList.add("is-grabbing");
  };

  const moveDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const deltaX = event.clientX - drag.current.lastX;
    const deltaY = event.clientY - drag.current.lastY;
    drag.current.targetY += deltaX * 0.015;
    drag.current.targetZ += deltaY * 0.013;
    drag.current.lastX = event.clientX;
    drag.current.lastY = event.clientY;
  };

  const stopDrag = () => {
    drag.current.active = false;
    document.body.classList.remove("is-grabbing");
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-20 w-full pointer-events-none"
    >
      <div
        className="absolute inset-0 cursor-grab touch-pan-y pointer-events-auto md:touch-none"
        aria-label="Interactive 3D bottle. Drag horizontally to rotate and vertically to tilt. Position updates as you scroll."
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <Canvas
          dpr={[1, 1.7]}
          camera={{ position: [0, 0.2, 5.2], fov: 32 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={1.6} />
          <directionalLight position={[5.5, 7, 6.5]} intensity={4.6} />
          <directionalLight position={[-6.5, 1.5, 3.5]} intensity={2.6} />
          <pointLight position={[0, -3.5, 5.5]} intensity={3.0} />
          <spotLight position={[0, 6, 5.5]} angle={0.48} penumbra={0.9} intensity={2.9} />
          <Environment preset="studio" intensity={0.9} />
          <Suspense fallback={null}>
            <BottleModel
              key={activeModel.url}
              url={activeModel.url}
              spinZ={spinZ}
              drag={drag}
              scrollProgress={scrollProgress}
              containerRef={containerRef}
            />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>

      <div className="glass-panel absolute left-4 bottom-4 z-30 flex items-center gap-1 rounded-md p-1 sm:left-8 sm:bottom-8 pointer-events-auto">
        {MODELS.map((model, index) => (
          <Button
            key={model.label}
            type="button"
            size="sm"
            variant={modelIndex === index ? "default" : "ghost"}
            onClick={() => setModelIndex(index)}
            aria-pressed={modelIndex === index}
          >
            {model.label}
          </Button>
        ))}
        <Button
          type="button"
          size="sm"
          variant={spinZ ? "secondary" : "ghost"}
          onClick={() => setSpinZ((active) => !active)}
          aria-pressed={spinZ}
          title="Toggle Z-axis rotation"
        >
          <Rotate3D />
          Z spin
        </Button>
      </div>
    </div>
  );
}

// Preload models for instant switching
useGLTF.preload(perfumeBottleUrl);