import { type ReactNode } from "react";
import { Sparkles, Heart, Camera, Palette, Wand2, Crown } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  camera: <Camera className="w-6 h-6" />,
  palette: <Palette className="w-6 h-6" />,
  wand: <Wand2 className="w-6 h-6" />,
  crown: <Crown className="w-6 h-6" />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Servicios</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Lo que <span className="text-gradient">ofrezco</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="bg-gradient-card rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-fade-in-up group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground mb-4 group-hover:animate-glow-pulse">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
              <p className="text-primary font-bold text-lg">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
