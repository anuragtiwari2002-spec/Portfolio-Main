"use client";

import { useEffect, useRef, useState } from "react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useTheme } from "@/components/theme-provider";

const RIVE_SRC = "https://public.rive.app/hosted/176606/370202/U96ZuqNRJkO3IFQrY1lW-A.riv";
const STATE_MACHINE = "State Machine 1";
const IDLE_HIDE_MS = 700;

export function DarkRiveBackground() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isPressing, setIsPressing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const pressingRef = useRef(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const layout = new Layout({
    fit: Fit.Contain,
    alignment: Alignment.Center,
  });

  const { RiveComponent, rive } = useRive({
    src: RIVE_SRC,
    // Keep the default artboard from the file.
    stateMachines: STATE_MACHINE,
    autoplay: true,
    automaticallyHandleEvents: true,
    layout,
  });

  useEffect(() => {
    if (!rive) return;
    if (theme === "dark") {
      rive.play();
    } else {
      rive.pause();
    }
  }, [rive, theme]);

  useEffect(() => {
    pressingRef.current = isPressing;
  }, [isPressing]);

  useEffect(() => {
    if (theme !== "dark") return;

    const resetIdleTimer = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        if (!pressingRef.current) setIsVisible(false);
      }, IDLE_HIDE_MS);
    };

    const setTarget = (x: number, y: number, immediate = false) => {
      targetRef.current = { x, y };
      if (immediate) {
        currentRef.current = { x, y };
        setPosition({ x, y });
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      setTarget(event.clientX, event.clientY);
      setIsVisible(true);
      resetIdleTimer();
    };

    const onMouseDown = (event: MouseEvent) => {
      setTarget(event.clientX, event.clientY, true);
      setIsPressing(true);
      setIsVisible(true);
      resetIdleTimer();
    };

    const onMouseUp = () => {
      setIsPressing(false);
      resetIdleTimer();
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsPressing(false);
    };

    const animate = () => {
      const speed = pressingRef.current ? 0.45 : 0.18;
      const cx = currentRef.current.x + (targetRef.current.x - currentRef.current.x) * speed;
      const cy = currentRef.current.y + (targetRef.current.y - currentRef.current.y) * speed;
      currentRef.current = { x: cx, y: cy };
      setPosition({ x: cx, y: cy });
      rafRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("blur", onMouseLeave);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("blur", onMouseLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [theme]);

  if (theme !== "dark") return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute h-[340px] w-[340px] will-change-transform transition-opacity duration-200"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <RiveComponent className="h-full w-full" />
      </div>
    </div>
  );
}
