import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Portfolio hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <p className="text-pink-soft font-body text-sm uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
            Lorem Ipsum Dolor
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Consectetur{" "}
            <span className="text-gradient">adipiscing</span>
            <br />
            elit
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna. ✨
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <button
              onClick={() => scrollTo("gallery")}
              className="px-8 py-3 rounded-full bg-gradient-accent text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-all"
            >
              Ver Portfolio
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
