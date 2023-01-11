import React, { useEffect, useRef } from 'react';

import './BCanvas.scss';
import { renderCanvasMobile } from './canvasMobile';
import { renderCanvasPC } from './canvasPc';

export default function BCanvas() {
  const ref = useRef();
  useEffect(() => {
    let unsubscribe;
    if (window.innerWidth > 450) {
      console.log('PC');
      unsubscribe = renderCanvasPC(ref.current);
    } else {
      console.log('Mobile');
      unsubscribe = renderCanvasMobile(ref.current);
    }
    return () => {
      unsubscribe?.();
    };
  }, []);
  return (
    <div className="canvas-container1">
      <canvas ref={ref} className="container"></canvas>
    </div>
  );
}
