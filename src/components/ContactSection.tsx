import { useState } from "react";
import { Instagram, Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Contacto</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            ¿Listo para <span className="text-gradient">comenzar</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Hablemos 💕</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ¡Te respondo pronto!
            </p>
            <div className="space-y-4">
              <a href="https://instagram.com/tu_instagram" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                @tu_instagram
              </a>
              <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                +00 000 000 0000
              </a>
              <a href="mailto:correo@ejemplo.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                correo@ejemplo.com
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                Tu Ciudad, País
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Tu email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
            />
            <textarea
              rows={5}
              placeholder="Lorem ipsum dolor sit amet, cuéntame lo que necesitas..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-accent text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-glow hover:opacity-90 transition-opacity"
            >
              {sent ? "¡Mensaje enviado! 💖" : <><Send className="w-4 h-4" /> Enviar Mensaje</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
