"use client";

import { useCallback, useEffect, useState } from "react";
import BackgroundParticles from "../background-particles";
import Footer from "./footer";
import MobileNav from "./mobile-nav";
import Nav from "./nav";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [toggleNav, setToggleNav] = useState(false);

  // Close mobile nav if screen size expands
  useEffect(() => {
    const handleResize = () => {
      const shouldBeDesktop = window.innerWidth > 768;

      if (shouldBeDesktop) {
        setToggleNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleNavigation = useCallback(() => {
    setToggleNav((prevToggleNav) => !prevToggleNav);
  }, []);

  const handleDismissToggle = useCallback(() => {
    setToggleNav(false);
  }, []);

  return (
    <div className="flex min-h-full flex-col">
      <BackgroundParticles />
      <Nav onToggleNav={handleToggleNavigation} />
      <MobileNav toggleNav={toggleNav} onDismissToggle={handleDismissToggle} />
      <section className="p-6.25">{children}</section>
      <Footer />
    </div>
  );
}
