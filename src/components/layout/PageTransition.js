'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurvePaths } from './Curve';

const routes = {
  "/": "Home",
  "/contact": "Contact",
  "/projects/farmly-overview": "Farmly Overview",
  "/projects/portfolio-overview": "Portfolio Overview"
};

const hashRoutes = {
  "#about": "About",
  "#projects": "Projects",
  "#photography": "Photography",
  "#contact": "Contact"
};

// Page color configuration
const pageColors = {
  '/': '#d97757',
  '/contact': '#d97757', //Orange for Contact
  '/projects/farmly-overview': '#4CAF50', // Green for Farmly
  '/projects/portfolio-overview': '#7c3aed', // Purple for Portfolio
};

// Helper function to determine transition color based on navigation direction
const getTransitionColor = (fromPath, toPath) => {
  const isHome = (path) => path === '/' || path.includes('#');
  const isReturningHome = !isHome(fromPath) && isHome(toPath);

  // When returning to home from any special page, use black
  if (isReturningHome) {
    return '#000000';
  }

  // Otherwise, use the target page's color (or default orange)
  return pageColors[toPath] || '#d97757';
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
  const [transitionColor, setTransitionColor] = useState('#d97757');

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

  // Listen to pathname changes
  useEffect(() => {
    // Detect if it's a real page route change (not hash change)
    const isPageChange = pathname !== previousPathname;

    if (isPageChange) {
      // Calculate transition color based on navigation direction
      const color = getTransitionColor(previousPathname, pathname);
      setTransitionColor(color);

      // Check if leaving a special page (contact or farmly-overview) to return home
      const isLeavingSpecialPage =
        (previousPathname === '/contact' || previousPathname === '/projects/farmly-overview')
        && (pathname === '/' || pathname.includes('#'));
      setIsLeavingContact(isLeavingSpecialPage);

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

  const { initialPath, targetPath } = dimensions.width
    ? getCurvePaths(dimensions.width, dimensions.height)
    : { initialPath: '', targetPath: '' };

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
