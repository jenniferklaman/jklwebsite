import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Logo.css"; // normal CSS file

// 1. Define a prop type that extends React.SVGProps<SVGSVGElement>
interface CatLogoProps extends React.SVGProps<SVGSVGElement> {
  // You can add more custom props here if needed
}

export default function CatLogo({
  className,
  ...rest
}: CatLogoProps) {
  const blinkRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [isBlinking, setIsBlinking] = useState(false);

  const [positions, setPositions] = useState({
    head: { x: 75, y: 85 },
    leftEye: { x: 67, y: 88 },
    rightEye: { x: 83, y: 88 },
    leftEar: { x: 60 },
    rightEar: { x: 90 },
    leftWhiskers: { x: 45, y: 100 },
    rightWhiskers: { x: 105, y: 100 },
  });

  // MOUSE / TOUCH MOVE LOGIC
  const handleMove = useCallback((clientX: number, clientY: number) => {
    const svgElement = document.getElementById("brand");
    if (!svgElement) return;

    const rect = svgElement.getBoundingClientRect();
    const svgCenterX = rect.left + rect.width / 2;
    const svgCenterY = rect.top + rect.height / 2;
    const offsetX = clientX - svgCenterX;
    const offsetY = clientY - svgCenterY;

    // HEAD movement
    const maxHeadOffset = 4;
    const headDistance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    const clampedHeadDistance = Math.min(headDistance, maxHeadOffset);
    const headAngle = Math.atan2(offsetY, offsetX);
    const headMoveX = clampedHeadDistance * Math.cos(headAngle);
    const headMoveY = clampedHeadDistance * Math.sin(headAngle);

    // EYE movement
    const maxEyesOffset = 10;
    const clampedEyesDistance = Math.min(headDistance, maxEyesOffset);
    const eyeMoveX = clampedEyesDistance * Math.cos(headAngle);
    const eyeMoveY = clampedEyesDistance * Math.sin(headAngle);

    // EAR movement
    const earMoveFactor = 0.5;
    const earMoveX = headMoveX * earMoveFactor;

    // WHISKERS should move with the head
    const whiskerMoveFactor = 0.7;
    const whiskerMoveX = headMoveX * whiskerMoveFactor;
    const whiskerMoveY = headMoveY * whiskerMoveFactor;

    setPositions({
      head: {
        x: 75 + headMoveX,
        y: 85 + headMoveY,
      },
      leftEye: {
        x: 67 + eyeMoveX,
        y: 88 + eyeMoveY,
      },
      rightEye: {
        x: 83 + eyeMoveX,
        y: 88 + eyeMoveY,
      },
      leftEar: {
        x: 60 - earMoveX,
      },
      rightEar: {
        x: 90 - earMoveX,
      },
      leftWhiskers: {
        x: 45 + whiskerMoveX,
        y: 100 + whiskerMoveY,
      },
      rightWhiskers: {
        x: 105 + whiskerMoveX,
        y: 100 + whiskerMoveY,
      },
    });
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => handleMove(event.clientX, event.clientY),
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    },
    [handleMove]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  // BLINK LOGIC
  useEffect(() => {
    const scheduleBlink = () => {
      const nextBlink = Math.random() * 3000 + 2000;
      blinkRef.current = setTimeout(() => {
        setIsBlinking(true);
        blinkRef.current = setTimeout(() => setIsBlinking(false), 200);
        scheduleBlink();
      }, nextBlink);
    };
    scheduleBlink();

    return () => {
      if (blinkRef.current) {
        clearTimeout(blinkRef.current);
      }
    };
  }, []);

  // RENDER
  return (
    <svg
      id="brand"
      // 2. Pass className and any other SVG props via {...rest}
      className={className}
      width="64"
      height="64"
      viewBox="0 0 150 150"
      {...rest}
    >
      <defs>
        <clipPath id="backgroundClip">
          <circle cx="75" cy="75" r="75" />
        </clipPath>
      </defs>

      <g clipPath="url(#backgroundClip)">
        {/* Background Circle */}
        <circle cx="75" cy="75" r="75" className="cat-bg" />

        {/* EARS */}
        <path
          className="cat-ear"
          d={`
            M${positions.leftEar.x - 10} 60
            L${positions.leftEar.x + 10} 60
            L${positions.leftEar.x} 35
          Z`}
        />
        <path
          className="cat-ear"
          d={`
            M${positions.rightEar.x - 10} 60
            L${positions.rightEar.x + 10} 60
            L${positions.rightEar.x} 35
          Z`}
        />

        {/* HEAD */}
        <circle
          r="40"
          cx={positions.head.x}
          cy={positions.head.y}
          className="cat-head"
        />

        {/* WHISKERS */}
        <g className="cat-whiskers">
          {/* Left Whiskers */}
          <line
            x1={positions.leftWhiskers.x}
            y1={positions.leftWhiskers.y - 4}
            x2={positions.leftWhiskers.x - 20}
            y2={positions.leftWhiskers.y - 7}
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1={positions.leftWhiskers.x}
            y1={positions.leftWhiskers.y}
            x2={positions.leftWhiskers.x - 20}
            y2={positions.leftWhiskers.y}
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1={positions.leftWhiskers.x}
            y1={positions.leftWhiskers.y + 4}
            x2={positions.leftWhiskers.x - 20}
            y2={positions.leftWhiskers.y + 7}
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Right Whiskers */}
          <line
            x1={positions.rightWhiskers.x}
            y1={positions.rightWhiskers.y - 4}
            x2={positions.rightWhiskers.x + 20}
            y2={positions.rightWhiskers.y - 7}
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1={positions.rightWhiskers.x}
            y1={positions.rightWhiskers.y}
            x2={positions.rightWhiskers.x + 20}
            y2={positions.rightWhiskers.y}
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1={positions.rightWhiskers.x}
            y1={positions.rightWhiskers.y + 4}
            x2={positions.rightWhiskers.x + 20}
            y2={positions.rightWhiskers.y + 7}
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* EYES */}
        <ellipse
          rx="5"
          cx={positions.leftEye.x}
          cy={positions.leftEye.y}
          ry={isBlinking ? "0" : "10"}
          className="cat-eye"
        />
        <ellipse
          rx="5"
          cx={positions.rightEye.x}
          cy={positions.rightEye.y}
          ry={isBlinking ? "0" : "10"}
          className="cat-eye"
        />
      </g>
    </svg>
  );
}
