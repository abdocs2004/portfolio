"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "../data/site";
import { MenuIcon, CloseIcon } from "./icons/UiIcons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-20">
        <Link href="/" className="font-display font-bold text-lg tracking-tight">
          Abdelrahman<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === item.href ? "text-accent" : "text-text/80"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-primary text-sm">
            Let&apos;s Talk
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`mobile-menu md:hidden border-t border-line bg-bg ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul className="container-x py-5 flex flex-col gap-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`block py-4 text-base font-medium ${
                  pathname === item.href ? "text-accent" : "text-text/85"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="btn btn-primary w-full justify-center"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
