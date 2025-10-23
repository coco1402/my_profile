'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const routes = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact"
};

const anim = (variants) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    };
};

export default function Curve({ children, backgroundColor }) {
    const pathname = usePathname();
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    });

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

    return (
        <div className="page curve relative" style={{ backgroundColor }}>
            <div
                style={{ opacity: dimensions.width == null ? 1 : 0 }}
                className="fixed h-[calc(100vh+600px)] w-screen pointer-events-none left-0 top-0 bg-black transition-opacity duration-100 linear z-[1]"
            />
            <motion.p
                className="fixed left-1/2 top-[40%] text-white text-[46px] z-[3] -translate-x-1/2 text-center"
                {...anim(text)}
            >
                {routes[pathname]}
            </motion.p>
            {dimensions.width != null && <SVG {...dimensions} />}
            {children}
        </div>
    );
}

const SVG = ({ height, width }) => {
    const initialPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg
            className="fixed h-[calc(100vh+600px)] w-screen pointer-events-none left-0 top-0 z-[2]"
            {...anim(translate)}
        >
            <motion.path
                fill="#e8e4dc"
                {...anim(curve(initialPath, targetPath))}
            />
        </motion.svg>
    );
};

export const text = {
    initial: {
        opacity: 1,
    },
    enter: {
        opacity: 0,
        top: -100,
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: { top: "47.5%" }
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] }
    }
};

export const curve = (initialPath, targetPath) => {
    return {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
        }
    };
};

export const translate = {
    initial: {
        top: "-300px"
    },
    enter: {
        top: "-100vh",
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: {
            top: "100vh"
        }
    },
    exit: {
        top: "-300px",
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    }
};
