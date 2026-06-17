"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Áreas", href: "#areas" },
  { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 py-6 md:px-16">
        <Link
          href="#inicio"
          className="font-heading text-lg lg:text-2xl font-bold text-[var(--primary)] tracking-tight shrink-0 leading-none"
        >
          Estudio Posta
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm lg:text-base text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contacto"
          className="hidden rounded-md border-2 border-[var(--primary)] bg-[var(--primary)] px-5 py-2 font-body text-sm font-medium text-white [letter-spacing:1px] transition-colors hover:bg-white hover:text-[var(--primary)] lg:inline-block shrink-0"
        >
          Solicitar Consulta
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="h-[1.5px] w-6 bg-[var(--foreground)]" />
          <span className="h-[1.5px] w-6 bg-[var(--foreground)]" />
          <span className="h-[1.5px] w-4 self-end bg-[var(--foreground)]" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-[var(--background)] transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-6">
          <span className="font-heading text-lg font-bold text-[var(--primary)]">
            Estudio Posta
          </span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Cerrar menú"
            className="flex h-10 w-10 items-center justify-center"
          >
            <span className="relative block h-5 w-5">
              <span className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[var(--foreground)]" />
              <span className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[var(--foreground)]" />
            </span>
          </button>
        </div>

        <ul className="mt-12 flex flex-col items-center gap-8 px-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="font-heading text-2xl text-[var(--on-surface)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center px-4">
          <Link
            href="#contacto"
            onClick={closeMenu}
            className="rounded-md border-2 border-[var(--primary)] bg-[var(--primary)] px-8 py-3 font-body text-sm font-medium text-white [letter-spacing:1px] transition-colors hover:bg-white hover:text-[var(--primary)]"
          >
            Solicitar Consulta
          </Link>
        </div>
      </div>
    </header>
  );
}