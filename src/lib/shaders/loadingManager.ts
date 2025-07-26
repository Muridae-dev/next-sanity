import * as THREE from "three";
import { useEffect, useState } from "react";

export function useLoadingManager() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const manager = new THREE.LoadingManager();

    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      setProgress((itemsLoaded / itemsTotal) * 100);
    };

    manager.onLoad = () => {
      setLoaded(true);
    };

    // Save to global THREE.DefaultLoadingManager if you want all loaders to use it
    THREE.DefaultLoadingManager.onProgress = manager.onProgress;
    THREE.DefaultLoadingManager.onLoad = manager.onLoad;

    return () => {
      THREE.DefaultLoadingManager.onProgress = () => {};
      THREE.DefaultLoadingManager.onLoad = () => {};
    };
  }, []);

  return { progress, loaded };
}
