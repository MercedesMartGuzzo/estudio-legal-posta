"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
          ? "bg-[var(--background)] border-b border-[var(--border)] lg:bg-[var(--background)]/90 lg:backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 py-6 md:px-16">
        {/* Logo: siempre ocupa su lugar en el flujo (no usa 'hidden'), se oculta con opacidad para que el layout no salte */}
        <Link
          href="#inicio"
          className={`font-heading text-2xl font-bold text-[var(--primary)] tracking-tight shrink-0 leading-none transition-opacity duration-150 ${
            isOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          Estudio Posta
        </Link>

        {/* Desktop Menu */}
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

        {/* Botón Abrir */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
          className="flex shrink-0 items-center justify-center lg:hidden"
        >
          <Menu size={32} color="var(--foreground)" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--background)] transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Header del menú móvil */}
        <div className="flex items-center justify-end px-4 py-6">
          <button type="button" onClick={closeMenu} aria-label="Cerrar menú">
            <X size={32} color="var(--foreground)" />
          </button>
        </div>

        {/* Contenedor centrado */}
        <div className="flex h-[70vh] flex-col items-center justify-center">
          <ul className="flex flex-col items-center gap-8 px-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="font-heading text-3xl text-[var(--on-surface)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link
              href="#contacto"
              onClick={closeMenu}
              className="rounded-md border-2 border-[var(--primary)] bg-[var(--primary)] px-8 py-3 font-body text-lg font-medium text-white transition-colors hover:bg-white hover:text-[var(--primary)]"
            >
              Solicitar Consulta
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}