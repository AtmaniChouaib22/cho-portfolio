"use client";
import { useState, useEffect, useRef } from "react";

interface CursorProps {
  parentSelector?: string; // Optional selector for the parent element
  tooltipText?: string; // Optional custom tooltip text
  cursorColor?: string;
  bgColor?: string; // Optional custom cursor color
}

const Cursor = ({
  parentSelector = "body",
  tooltipText = "Hello there!",
  cursorColor = "#fff",
  bgColor = "fff", // Default white color
}: CursorProps) => {
  // Track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // Animation references with simplified values
  const requestRef = useRef<number | undefined>(undefined);
  const angleRef = useRef(Math.random() * Math.PI * 2); // Random start angle
  const radiusRef = useRef(30); // Fixed initial radius
  const centerRef = useRef({ x: 0, y: 0 });
  const speedRef = useRef(0.015); // Consistent speed
  const parentRef = useRef<Element | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Smoothing references
  const targetRadiusRef = useRef(30);
  const targetSpeedRef = useRef(0.015);

  // Get parent element dimensions and position
  const updateParentCenter = () => {
    if (!parentRef.current) return;

    const rect = parentRef.current.getBoundingClientRect();

    // Calculate center of the parent element in page coordinates
    centerRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    // Adjust radius based on parent size (keep it proportional but reasonable)
    const minDimension = Math.min(rect.width, rect.height) / 4;
    const maxRadius = Math.min(60, Math.max(30, minDimension - 20)); // Between 30-60px
    targetRadiusRef.current = maxRadius;
  };

  const animate = () => {
    if (!parentRef.current) return;

    // Smooth radius transition (lerp towards target)
    radiusRef.current += (targetRadiusRef.current - radiusRef.current) * 0.05;

    // Add subtle randomness to target radius for organic movement
    targetRadiusRef.current += (Math.random() - 0.5) * 0.5;
    // Keep target within reasonable bounds
    targetRadiusRef.current = Math.max(
      25,
      Math.min(60, targetRadiusRef.current)
    );

    // Smooth speed transition
    speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.1;

    // Add subtle randomness to speed
    targetSpeedRef.current += (Math.random() - 0.5) * 0.0005;
    targetSpeedRef.current = Math.max(
      0.01,
      Math.min(0.02, targetSpeedRef.current)
    );

    // Calculate new position with consistent motion
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
    // Client-side only code
    if (typeof window === "undefined") return;

    // Find the parent element with retry logic
    const initializeParent = () => {
      const parent = document.querySelector(parentSelector);

      if (parent) {
        parentRef.current = parent;
        updateParentCenter();
        setIsInitialized(true);

        // Monitor for parent size/position changes
        const resizeObserver = new ResizeObserver(() => {
          updateParentCenter();
        });

        resizeObserver.observe(parent);

        // Start animation after a small delay to ensure everything is loaded
        setTimeout(() => {
          requestRef.current = requestAnimationFrame(animate);
        }, 100);

        return resizeObserver;
      }
      return null;
    };

    // Try to initialize, with retries for complex layouts
    let resizeObserver: ResizeObserver | null = initializeParent();

    // If parent not found initially, retry a few times
    if (!resizeObserver) {
      const retryTimer = setInterval(() => {
        resizeObserver = initializeParent();
        if (resizeObserver) clearInterval(retryTimer);
      }, 500);

      // Clean up retry timer if component unmounts during retries
      return () => clearInterval(retryTimer);
    }

    // We don't need a separate scroll handler since we recalculate based on
    // getBoundingClientRect in every animation frame, which accounts for scrolling
    window.addEventListener("resize", updateParentCenter);

    // Cleanup on unmount
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

  // Return null if not initialized
  if (!isInitialized) return null;

  // Determine if we should use mix-blend-mode based on color
  const isLightColor = cursorColor === "#fff" || cursorColor === "#ffffff";

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed", // Keep fixed to overlay correctly
        top: 0,
        left: 0,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      {/* Mouse cursor shape */}
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

      {/* Tooltip */}
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
