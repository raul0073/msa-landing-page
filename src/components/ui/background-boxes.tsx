"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  const colors = [
    "--lime-400",
    "--lime-600",
    "--green-300",
    "--amber-400",
    "--violet-300",
  ];

  const [randomBoxes, setRandomBoxes] = useState<
    { row: number; col: number; color: string }[]
  >([]);

  // Generate random boxes with colors on mount
  useEffect(() => {
    const boxes = [];
    const numberOfBoxesToColor = Math.floor(Math.random() * 50) + 20; // Random number of boxes
    for (let i = 0; i < numberOfBoxesToColor; i++) {
      const randomRow = Math.floor(Math.random() * rows.length);
      const randomCol = Math.floor(Math.random() * cols.length);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      boxes.push({ row: randomRow, col: randomCol, color: randomColor });
    }
    setRandomBoxes(boxes);
  }, []);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-20 h-20 border-l border-slate-700 relative" // Increased box size
        >
          {cols.map((_, j) => {
            const box = randomBoxes.find((b) => b.row === i && b.col === j);
            return (
              <motion.div
                key={`col` + j}
                className="w-20 h-20 border-r border-t border-slate-700 relative" // Increased box size
                style={{
                  backgroundColor: box ? `var(${box.color})` : "transparent",
                }}
              />
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
