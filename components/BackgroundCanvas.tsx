"use client";

import { useEffect, useRef, useState } from "react";
import "../styles/background-canvas.css";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Встановлюємо isClient на true після монтування на клієнті
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Не рендеримо, якщо не на клієнті

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;

      if (window.visualViewport) {
        canvas.width = window.visualViewport.width;
        canvas.height = window.visualViewport.height;
      }
    };

    updateCanvasSize();

    let lines: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      progress: number;
    }[] = [];
    const maxLines = 6;

    const addLine = () => {
      if (lines.length < maxLines) {
        lines.push({
          x1: Math.random() * canvas.width,
          y1: Math.random() * canvas.height,
          x2: Math.random() * canvas.width,
          y2: Math.random() * canvas.height,
          progress: 0,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#4682B4";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.5;

      lines.forEach((line, index) => {
        const dx = line.x2 - line.x1;
        const dy = line.y2 - line.y1;
        const length = Math.sqrt(dx * dx + dy * dy);
        const progressStep = 0.005;

        if (line.progress < 1) {
          line.progress += progressStep;
        } else if (Math.random() < 0.02) {
          lines.splice(index, 1);
          addLine();
        }

        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(
          line.x1 + dx * Math.min(line.progress, 1),
          line.y1 + dy * Math.min(line.progress, 1)
        );
        ctx.stroke();
      });

      if (lines.length < maxLines && Math.random() < 0.1) {
        addLine();
      }

      requestAnimationFrame(animate);
    };

    addLine();
    animate();

    const handleResize = () => {
      updateCanvasSize();
      lines = lines.map((line) => ({
        ...line,
        x1: (line.x1 / canvas.width) * document.documentElement.clientWidth,
        y1: (line.y1 / canvas.height) * document.documentElement.clientHeight,
        x2: (line.x2 / canvas.width) * document.documentElement.clientWidth,
        y2: (line.y2 / canvas.height) * document.documentElement.clientHeight,
      }));
    };

    window.addEventListener("resize", handleResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
    };
  }, [isClient]);

  if (!isClient) {
    return null; // Не рендеримо canvas на сервері
  }

  return <canvas ref={canvasRef} className="background-canvas" />;
}
