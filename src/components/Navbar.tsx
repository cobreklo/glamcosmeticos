import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/#hero" },
  { label: "Portfolio", href: "/#gallery" },
  { label: "Servicios", href: "/#services" },
  { label: "Sobre Mí", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl font-bold text-gradient">
          ✨ YourBrandName
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href.replace("/#", ""))}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-full bg-gradient-accent text-primary-foreground text-sm font-semibold shadow-glow hover:opacity-90 transition-opacity"
          >
            Reservar Cita
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border pb-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href.replace("/#", ""))}
              className="block w-full text-left px-6 py-3 text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 pt-2">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full px-5 py-2 rounded-full bg-gradient-accent text-primary-foreground text-sm font-semibold"
            >
              Reservar Cita
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
