'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getCurvePaths } from './Curve';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showCurve, setShowCurve] = useState(false);
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const waveNodesRef = useRef([]);
  const wavePathRef = useRef(null);
  const progressRef = useRef(0);

  // Get window dimensions for curve animation
  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev >= 100 ? 100 : prev + 2;
        progressRef.current = newProgress;

        if (prev >= 100) {
          clearInterval(interval);
          // Pause for 500ms when reaching 100%, then show curve
          setTimeout(() => {
            setLoading(false);
            setShowCurve(true);

            // After curve animation completes, dispatch event
            setTimeout(() => {
              setShowCurve(false);
              window.dispatchEvent(new Event('preloaderComplete'));
            }, 1850); // Match curve animation duration
          }, 500);
        }
        return newProgress;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Wave animation using SVG path
  useEffect(() => {
    if (!loading) return;

    const width = 1000;
    const height = 300;
    const waveHeight = 40;
    const nodes = 15;
    let animationFrame = 0;
    let rafId;

    // Initialize wave nodes once
    if (waveNodesRef.current.length === 0) {
      for (let i = 0; i <= nodes + 2; i++) {
        waveNodesRef.current.push({
          x: (i - 1) * width / nodes,
          phase: (i * Math.PI * 2) / nodes
        });
      }
    }

    const updateWave = () => {
      if (!wavePathRef.current) {
        rafId = requestAnimationFrame(updateWave);
        return;
      }

      animationFrame += 0.06;
      const baseY = height - (height * progressRef.current / 100);

      // Generate SVG path - create a filled area from bottom to wave
      const diff = (a, b) => (b - a) / 2 + a;

      // Start from bottom left
      let path = `M 0,${height} `;

      // Draw the wave line from left to right
      for (let i = 0; i < waveNodesRef.current.length; i++) {
        const node = waveNodesRef.current[i];
        const nextNode = waveNodesRef.current[i + 1];

        // Calculate wave position with animation
        const waveY = baseY + Math.sin(animationFrame + node.phase) * waveHeight;

        if (nextNode) {
          const nextWaveY = baseY + Math.sin(animationFrame + nextNode.phase) * waveHeight;
          const midX = diff(node.x, nextNode.x);
          const midY = diff(waveY, nextWaveY);
          path += `Q ${node.x},${waveY} ${midX},${midY} `;
        } else {
          path += `L ${node.x},${waveY} `;
        }
      }

      // Complete the shape: go to bottom right, then back to start
      path += `L ${width},${height} `;
      path += `L 0,${height} `;
      path += 'Z';

      // Directly update DOM instead of state
      wavePathRef.current.setAttribute('d', path);

      rafId = requestAnimationFrame(updateWave);
    };

    rafId = requestAnimationFrame(updateWave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [loading]);

  // Curve animation paths
  const { initialPath, targetPath } = dimensions.width
    ? getCurvePaths(dimensions.width, dimensions.height)
    : { initialPath: '', targetPath: '' };

  return (
    <>
      {/* Welcome animation - stays visible and transitions to curve animation */}
      {(loading || showCurve) && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          suppressHydrationWarning
          initial={{ opacity: 1 }}
          animate={showCurve ? {
            // When curve starts, move everything up
            y: "-100vh",
            opacity: 0
          } : { y: 0, opacity: 1 }}
          transition={showCurve ? {
            duration: 1.5,
            delay: 0.35,
            ease: [0.76, 0, 0.24, 1]
          } : { duration: 0 }}
        >
          <div className="relative flex flex-col items-center justify-center gap-4 md:gap-8 w-full px-4">
            <div className="relative w-full max-w-[90vw] md:max-w-[1000px]" style={{ aspectRatio: '1000 / 300' }}>
              {/* Single SVG with wave clipping - scales to container */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 300"
                className="absolute top-0 left-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Define the wave path for clipping */}
                  <clipPath id="waveClip">
                    <path ref={wavePathRef} d="" />
                  </clipPath>
                </defs>

                {/* Background text - dark outline */}
                <text
                  x="500"
                  y="200"
                  fontSize="220"
                  fontFamily="var(--font-londrina-solid)"
                  textAnchor="middle"
                  letterSpacing="-0.02em"
                  fill="none"
                  stroke="#333333"
                  strokeWidth="2"
                >
                  Welcome
                </text>

                {/* Foreground text - white fill, clipped by wave */}
                <text
                  x="500"
                  y="200"
                  fontSize="220"
                  fontFamily="var(--font-londrina-solid)"
                  textAnchor="middle"
                  letterSpacing="-0.02em"
                  fill="white"
                  clipPath="url(#waveClip)"
                >
                  Welcome
                </text>
              </svg>
            </div>

            {/* Loading percentage */}
            <div className="text-white text-xl md:text-2xl font-[family-name:var(--font-lato)] tracking-wider">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}

      {/* Black curve - appears when showCurve is true */}
      {dimensions.width && showCurve && (
        <motion.svg
          className="fixed w-screen pointer-events-none left-0 top-0"
          style={{
            height: 'calc(100vh + 600px)',
            zIndex: 9998
          }}
          initial={{ y: -300 }}
          animate={{ y: "-100vh" }}
          transition={{ duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.path
            fill="#000000"
            initial={{ d: initialPath }}
            animate={{ d: targetPath }}
            transition={{ duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.svg>
      )}
    </>
  );
};

export default PreLoader;