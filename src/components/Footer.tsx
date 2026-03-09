

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg font-bold text-gradient mb-2">✨ TuMarca</p>
        <p className="text-muted-foreground text-sm">
          Hecho por{" "}
          <a
            href="https://cobrechan.dev"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline font-medium"
          >
            cobrechan
          </a>
          {" "}— © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
