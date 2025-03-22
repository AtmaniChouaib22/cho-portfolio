"use client";
import React, { createContext, useContext, useState } from "react";

const TooltipContext = createContext({
  showTooltip: false,
  tooltipContent: "",
  tooltipColor: "",
  tooltipPosition: { x: 0, y: 0 },
  setTooltip: (show: boolean, content: string, color: string) => {},
  updatePosition: (x: number, y: number) => {},
});

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  const [tooltipState, setTooltipState] = useState({
    showTooltip: false,
    tooltipContent: "",
    tooltipColor: "",
    tooltipPosition: { x: 0, y: 0 },
  });

  const setTooltip = (show: boolean, content: string, color: string) => {
    setTooltipState((prev) => ({
      ...prev,
      showTooltip: show,
      tooltipContent: content,
      tooltipColor: color,
    }));
  };

  const updatePosition = (x: number, y: number) => {
    setTooltipState((prev) => ({
      ...prev,
      tooltipPosition: { x, y },
    }));
  };

  return (
    <TooltipContext.Provider
      value={{
        ...tooltipState,
        setTooltip,
        updatePosition,
      }}
    >
      {children}
      <CursorTooltip />
    </TooltipContext.Provider>
  );
};

export const useTooltip = () => useContext(TooltipContext);

const CursorTooltip = () => {
  const { showTooltip, tooltipContent, tooltipColor, tooltipPosition } =
    useTooltip();

  return showTooltip ? (
    <div
      className="fixed pointer-events-none z-50 rounded-lg text-white text-md"
      style={{
        backgroundColor: tooltipColor || "#000",
        left: tooltipPosition.x,
        top: tooltipPosition.y,
        transform: "translate(10px, 10px)",
        opacity: 0.9,
        transition: "opacity 0.5s ease-in-out",
        borderRadius: "20px",
        padding: "5px 20px",
      }}
    >
      {tooltipContent}
    </div>
  ) : null;
};
