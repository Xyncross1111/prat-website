"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Landing } from "@/components/landing";
import { PageContent } from "@/components/page-content";

export default function Page() {
  const [opacity, setOpacity] = useState(0.25);
  const [showLanding, setShowLanding] = useState(true);
  const [shakeKey, setShakeKey] = useState(0);

  const handleInteraction = useCallback(() => {
    setShakeKey((prev) => prev + 1);
    if (opacity < 1) {
      setOpacity((prev) => Math.min(prev + 0.15, 1));
    } else {
      setShowLanding(false);
    }
  }, [opacity]);

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {showLanding ? (
          <Landing
            onInteraction={handleInteraction}
            shakeKey={shakeKey}
            opacity={opacity}
          />
        ) : (
          <PageContent />
        )}
      </AnimatePresence>
    </div>
  );
}