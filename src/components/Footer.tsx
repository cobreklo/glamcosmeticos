import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg font-bold text-gradient mb-2">✨ YourBrandName</p>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Hecho con <Heart className="w-3 h-3 fill-primary text-primary" /> — © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
