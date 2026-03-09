import { useState } from "react";
import aboutPhoto from "@/assets/about-photo.jpg";
import kodetristePhoto from "@/assets/kodetristejpg.jpg";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function AboutSection() {
  const [easterEgg, setEasterEgg] = useState(false);
  const [shake, setShake] = useState(false);

  const handleDoubleClick = () => {
    setEasterEgg((prev) => !prev);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent rounded-2xl blur-2xl opacity-20" />
            <img
              src={easterEgg ? kodetristePhoto : aboutPhoto}
              alt={easterEgg ? ":(" : "Sobre mí"}
              onDoubleClick={handleDoubleClick}
              className={`relative w-full max-w-md mx-auto rounded-2xl shadow-card object-cover aspect-[3/4] cursor-pointer select-none transition-all duration-300 ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""
                }`}
              title=""
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Sobre Mí</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Hola, soy <span className="text-gradient">Tu Nombre</span> 💖
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ¡Déjame ser parte de tus momentos más importantes! ✨
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-gradient">00+</p>
                <p className="text-sm text-muted-foreground">Clientes felices</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">0+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">5⭐</p>
                <p className="text-sm text-muted-foreground">Calificación</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-display text-3xl font-bold text-center mb-12">
            Lo que dicen mis <span className="text-gradient">clientes</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-gradient-card rounded-lg p-6 border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
