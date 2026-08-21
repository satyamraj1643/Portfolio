"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const TARGET_SIZE = 112;
const TARGET_HIT_PADDING = 34;

type PlayfulPortraitProps = {
  onDragStateChange?: (isDragging: boolean) => void;
};

const confettiPieces = Array.from({ length: 104 }, (_, index) => ({
  color: ["#2fa36b", "#e6f0d7", "#dcebf8", "#2b3560", "#ffcb05"][index % 5],
  left: (index * 37) % 100,
  drift: ((index * 29) % 180) - 90,
  rotation: 360 + ((index * 71) % 540),
  delay: (index % 12) * 0.025,
  duration: 1.7 + (index % 7) * 0.11,
}));

function isInsideTarget(point: { x: number; y: number }, target: { x: number; y: number }) {
  return point.x >= target.x - TARGET_HIT_PADDING
    && point.x <= target.x + TARGET_SIZE + TARGET_HIT_PADDING
    && point.y >= target.y - TARGET_HIT_PADDING
    && point.y <= target.y + TARGET_SIZE + TARGET_HIT_PADDING;
}

export default function PlayfulPortrait({ onDragStateChange }: PlayfulPortraitProps) {
  const reduceMotion = useReducedMotion();
  const [isDragging, setIsDragging] = useState(false);
  const [isOverTarget, setIsOverTarget] = useState(false);
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const startDrag = () => {
    const horizontalSpace = Math.max(window.innerWidth - TARGET_SIZE - 32, 1);
    const verticalSpace = Math.max(window.innerHeight - TARGET_SIZE - 112, 1);

    setTarget({
      x: 16 + Math.random() * horizontalSpace,
      y: 72 + Math.random() * verticalSpace,
    });
    setIsOverTarget(false);
    setIsDragging(true);
    onDragStateChange?.(true);
  };

  return (
    <>
      <motion.div
        drag
        dragElastic={0.16}
        dragMomentum={false}
        dragSnapToOrigin
        onDragStart={startDrag}
        onDrag={(_, info) => setIsOverTarget(Boolean(target && isInsideTarget(info.point, target)))}
        onDragEnd={(_, info) => {
          const successfulDrop = Boolean(isOverTarget || (target && isInsideTarget(info.point, target)));
          setIsDragging(false);
          onDragStateChange?.(false);
          setIsOverTarget(false);
          setTarget(null);

          if (successfulDrop) {
            setShowConfetti(true);
            window.setTimeout(() => setShowConfetti(false), 3000);
          }
        }}
        animate={reduceMotion
          ? { scale: isOverTarget ? 0.66 : 1 }
          : {
            y: [0, -2, 0, 1, 0],
            rotate: [0, 1.1, -1.1, 0.7, -0.7, 0],
            scale: isOverTarget ? 0.66 : 1,
          }}
        transition={{
          y: { duration: 4.6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4.6, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.2, ease: "easeOut" },
        }}
        className={`relative overflow-hidden rounded-[18px] border border-on-surface/8 bg-surface-variant p-2 shadow-[0_10px_24px_rgba(31,45,71,0.10)] active:cursor-grabbing ${isDragging ? "z-[1005] cursor-grabbing" : "cursor-grab"}`}
      >
        <Image
          src="/screen.png"
          alt="Product and engineering workstation illustration"
          width={600}
          height={600}
          priority
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="aspect-square w-full object-cover"
        />
      </motion.div>

      {isDragging && target && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: isOverTarget ? 1.06 : 1 }}
          transition={{ duration: 0.16 }}
          style={{ left: target.x, top: target.y }}
          className="pointer-events-none fixed z-[1010] grid h-28 w-28 place-items-center rounded-2xl border-2 border-white bg-primary px-3 text-center text-sm font-bold leading-tight text-white shadow-[0_14px_28px_rgba(31,45,71,0.22)]"
        >
          Drop it like it&apos;s hot
        </motion.div>
      )}

      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 z-[1100] overflow-hidden" aria-hidden="true">
          {confettiPieces.map((piece, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1, y: -24, rotate: 0 }}
              animate={{ opacity: [1, 1, 0], x: piece.drift, y: "110vh", rotate: piece.rotation }}
              transition={{ duration: piece.duration, delay: piece.delay, ease: "easeIn" }}
              style={{ backgroundColor: piece.color, left: `${piece.left}%` }}
              className="absolute top-0 h-2 w-1"
            />
          ))}
        </div>
      )}
    </>
  );
}
