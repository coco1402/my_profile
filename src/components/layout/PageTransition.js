'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const routes = {
  "/": "Home",
  "/contact": "Contact"
};

const hashRoutes = {
  "#about": "About",
  "#projects": "Projects",
  "#photography": "Photography",
  "#contact": "Contact"
};

// Helper function to standardize animation props
const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit"
  };
};

// Animation variants
const overlayVariants = {
  initial: { opacity: 1 },
  enter: {
    opacity: 0,
    transition: { duration: 0.3, delay: 1.5 }
  },
  exit: {
    opacity: 1,  // Show overlay again
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  }
};

const textVariants = {
  initial: { opacity: 1, top: "40%" },
  enter: {
    opacity: 0,
    top: "-100px",
    transition: { duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    opacity: 1,  // Show text again
    top: "40%",  // Return to center
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] }
  }
};

// Reversed text animation: top to bottom (for leaving contact page)
const textVariantsReversed = {
  initial: { opacity: 1, top: "40%" },
  enter: {
    opacity: 0,
    top: "150vh",  // Exit downwards
    transition: { duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] }
  }
};

const svgVariants = {
  initial: { y: -300 },
  enter: {
    y: "-100vh",
    transition: { duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    y: -300,  // Return to top
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  }
};

// Reversed animation: top to bottom (for leaving contact page)
const svgVariantsReversed = {
  initial: { y: -300 },  // Same initial position as normal
  enter: {
    y: "100vh",  // Exit downwards
    transition: { duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    y: "-100vh",  // Enter from top
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  }
};

const curve = (initialPath, targetPath) => ({
  initial: { d: initialPath },
  enter: {
    d: targetPath,
    transition: { duration: 1.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    d: initialPath,  // Restore curve
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  }
});

// Inner component: handles page content only
function AnimatedPage({ children, pageKey }) {
  return (
    <motion.div
      key={pageKey}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

// Outer component: manages AnimatePresence and route names
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [hasNavigated, setHasNavigated] = useState(false);
  const [previousPathname, setPreviousPathname] = useState(pathname);
  const [isLeavingContact, setIsLeavingContact] = useState(false);

  // Calculate target page name in real-time (so both exit and enter use the new name)
  const getRouteName = () => {
    // Check if in browser environment
    if (typeof window === 'undefined') {
      return routes[pathname] || "Home";
    }

    const currentHash = window.location.hash;

    // First check if it's a specific route page
    if (pathname !== '/' && routes[pathname]) {
      return routes[pathname];
    }

    // Otherwise check hash
    if (currentHash && hashRoutes[currentHash]) {
      return hashRoutes[currentHash];
    }

    // Default to Home
    return "Home";
  };

  const routeName = getRouteName();

  // Set transition color based on whether leaving contact page
  const transitionColor = isLeavingContact ? '#000000' : '#d97757';

  // Listen to pathname changes
  useEffect(() => {
    // Detect if it's a real page route change (not hash change)
    const isPageChange = pathname !== previousPathname;

    if (isPageChange) {
      // Check if leaving /contact
      const leavingContact = previousPathname === '/contact' && pathname !== '/contact';
      setIsLeavingContact(leavingContact);

      setPreviousPathname(pathname);
      setHasNavigated(true); // Set to true for each page change
    }
  }, [pathname, previousPathname]);

  // Only show animation for real page route changes (e.g., / ↔ /contact)
  // Hash navigation does not trigger animation
  const shouldShowAnimation = hasNavigated;

  // Use only pathname as key, so hash changes don't trigger AnimatePresence transition
  const pageKey = pathname;

  // Dimensions for curve animation
  const [dimensions, setDimensions] = useState({ width: null, height: null });

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

  const initialPath = dimensions.width ? `
    M0 300
    Q${dimensions.width/2} 0 ${dimensions.width} 300
    L${dimensions.width} ${dimensions.height + 300}
    Q${dimensions.width/2} ${dimensions.height + 600} 0 ${dimensions.height + 300}
    L0 0
  ` : '';

  const targetPath = dimensions.width ? `
    M0 300
    Q${dimensions.width/2} 0 ${dimensions.width} 300
    L${dimensions.width} ${dimensions.height}
    Q${dimensions.width/2} ${dimensions.height} 0 ${dimensions.height}
    L0 0
  ` : '';

  return (
    <>
      {/* Transition animation layer - independent of AnimatePresence */}
      {dimensions.width && shouldShowAnimation && (
        <motion.div
          key={`transition-${pageKey}`}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
          {...anim(overlayVariants)}
        >
          <motion.p
            className="fixed left-1/2 top-[40%] text-white text-[46px] -translate-x-1/2 text-center whitespace-nowrap font-bold"
            style={{ zIndex: 10001 }}
            {...anim(isLeavingContact ? textVariantsReversed : textVariants)}
          >
            {routeName}
          </motion.p>

          <motion.svg
            className="fixed w-screen pointer-events-none left-0 top-0"
            style={{
              height: 'calc(100vh + 600px)',
              zIndex: 10000
            }}
            {...anim(isLeavingContact ? svgVariantsReversed : svgVariants)}
          >
            <motion.path
              fill={transitionColor}
              {...anim(curve(initialPath, targetPath))}
            />
          </motion.svg>
        </motion.div>
      )}

      {/* Page content */}
      <AnimatePresence mode="wait">
        <AnimatedPage key={pageKey} pageKey={pageKey}>
          {children}
        </AnimatedPage>
      </AnimatePresence>
    </>
  );
}
