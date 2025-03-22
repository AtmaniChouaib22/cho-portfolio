"use client";
import { useState, useEffect, useRef } from "react";

interface CursorProps {
  parentSelector?: string;
  tooltipText?: string;
  cursorColor?: string;
  bgColor?: string;
}

const Cursor = ({
  parentSelector = "body",
  tooltipText = "Hello there!",
  cursorColor = "#fff",
  bgColor = "fff",
}: CursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  const requestRef = useRef<number | undefined>(undefined);
  const angleRef = useRef(Math.random() * Math.PI * 2);
  const radiusRef = useRef(30);
  const centerRef = useRef({ x: 0, y: 0 });
  const speedRef = useRef(0.015);
  const parentRef = useRef<Element | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const targetRadiusRef = useRef(30);
  const targetSpeedRef = useRef(0.015);

  const updateParentCenter = () => {
    if (!parentRef.current) return;

    const rect = parentRef.current.getBoundingClientRect();

    centerRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const minDimension = Math.min(rect.width, rect.height) / 4;
    const maxRadius = Math.min(60, Math.max(30, minDimension - 20));
    targetRadiusRef.current = maxRadius;
  };

  const animate = () => {
    if (!parentRef.current) return;

    radiusRef.current += (targetRadiusRef.current - radiusRef.current) * 0.05;

    targetRadiusRef.current += (Math.random() - 0.5) * 0.5;

    targetRadiusRef.current = Math.max(
      25,
      Math.min(60, targetRadiusRef.current)
    );

    speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.1;

    targetSpeedRef.current += (Math.random() - 0.5) * 0.0005;
    targetSpeedRef.current = Math.max(
      0.01,
      Math.min(0.02, targetSpeedRef.current)
    );

    angleRef.current += speedRef.current;

    const rect = parentRef.current.getBoundingClientRect();

    const newX =
      rect.left +
      rect.width / 2 +
      Math.cos(angleRef.current) * radiusRef.current;
    const newY =
      rect.top +
      rect.height / 2 +
      Math.sin(angleRef.current) * radiusRef.current;

    setPosition({ x: newX, y: newY });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initializeParent = () => {
      const parent = document.querySelector(parentSelector);

      if (parent) {
        parentRef.current = parent;
        updateParentCenter();
        setIsInitialized(true);

        const resizeObserver = new ResizeObserver(() => {
          updateParentCenter();
        });

        resizeObserver.observe(parent);

        setTimeout(() => {
          requestRef.current = requestAnimationFrame(animate);
        }, 100);

        return resizeObserver;
      }
      return null;
    };

    let resizeObserver: ResizeObserver | null = initializeParent();

    if (!resizeObserver) {
      const retryTimer = setInterval(() => {
        resizeObserver = initializeParent();
        if (resizeObserver) clearInterval(retryTimer);
      }, 500);

      return () => clearInterval(retryTimer);
    }

    window.addEventListener("resize", updateParentCenter);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateParentCenter);
    };
  }, [parentSelector]);

  if (!isInitialized) return null;

  const isLightColor = cursorColor === "#fff" || cursorColor === "#ffffff";

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderBottom: `20px solid ${cursorColor}`,
          transform: "rotate(-45deg)",
          transformOrigin: "top left",
          filter: `drop-shadow(0 0 5px ${cursorColor}80)`,
          mixBlendMode: isLightColor ? "difference" : "normal",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "5px",
          left: "25px",
          background: bgColor,
          color: "#fff",
          padding: "6px 10px",
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        {tooltipText}
      </div>
    </div>
  );
};

export default Cursor;
