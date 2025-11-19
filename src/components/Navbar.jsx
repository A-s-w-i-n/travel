import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";

const LINKS = [
  { label: "International", to: "/international" },
  { label: "Domestic", to: "/domestic" },
  { label: "Experience", to: "/experience" },
  { label: "Visa", to: "/visa" },
  { label: "About Us", to: "/about" },
  { label: "Custom Trip", to: "/custom" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  // measure header height (layout effect so measurement is accurate)
  useLayoutEffect(() => {
    function measure() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Close on outside click or escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") seteMobileOpen(false);
    }

    function onDocClick(e) {
      const target = e.target;
      // if panelRef not mounted yet, don't attempt contains
      if (panelRef.current && panelRef.current.contains(target)) return;
      if (toggleRef.current && toggleRef.current.contains(target)) return;
      // click outside toggle + panel -> close
      setMobileOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  function handleNavigate(to) {
    setMobileOpen(false);
    navigate(to);
  }

  // Mobile panel element (rendered via portal)
  const mobilePanel = (
    <div
      ref={panelRef}
      className="fixed left-0 right-0 z-60 md:hidden bg-[#002b43]/95 backdrop-blur-sm border-b border-white/10 shadow-lg transition-transform duration-200 ease-out origin-top w-full"
      style={{ top: headerHeight }}
      role="dialog"
      aria-modal="true"
    >
      <div className="px-4 sm:px-6 py-4">
        <ul className="flex flex-col gap-1">
          {LINKS.map((l) => (
            <li key={l.to} className="py-3 px-3 rounded-md text-base font-medium">
              <button
                onClick={() => handleNavigate(l.to)}
                className="w-full text-left hover:bg-white/5 py-2 px-1 rounded"
              >
                {l.label}
              </button>
            </li>
          ))}

          <li className="pt-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                navigate("/enquire");
              }}
              className="w-full rounded-full border border-white/20 px-6 py-2 text-sm font-medium hover:bg-white hover:text-[#002b43] transition-all"
            >
              Enquire
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Header (measured via headerRef) */}
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 w-full overflow-x-hidden bg-gradient-to-b from-slate-900/90 to-transparent text-white backdrop-blur-sm"
      >
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between gap-4 py-3 md:py-4 px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              aria-label="Home"
              className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              <img src={logo} alt="Somans" className="h-8 md:h-10 lg:h-12" />
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm md:text-base lg:text-lg font-medium">
            {LINKS.map((l) => (
              <li key={l.to} className="relative">
                <button
                  onClick={() => handleNavigate(l.to)}
                  className="px-1 py-2 flex items-center gap-2 border-b-2 border-transparent hover:border-red-500 transition-all"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Enquire button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate("/enquire")}
              className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-transparent hover:bg-red-600 transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Enquire
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              ref={toggleRef}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center rounded p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Portaled mobile panel -> mounts to document.body so it's not clipped */}
      {typeof document !== "undefined" &&
        mobileOpen &&
        ReactDOM.createPortal(mobilePanel, document.body)}
    </>
  );
}
