import { useState } from "react";
import { galleryItems, categories } from "@/lib/data";

export default function GallerySection() {
  const [active, setActive] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = active === "Todos"
    ? galleryItems
    : galleryItems.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Mis <span className="text-gradient">Trabajos</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat
                  ? "bg-gradient-accent text-primary-foreground shadow-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-card cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-wider text-primary mb-1">{item.category}</span>
                <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-card"
          />
        </div>
      )}
    </section>
  );
}
