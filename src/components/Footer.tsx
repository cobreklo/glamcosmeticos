import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const clickCount = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSecretClick = () => {
    clickCount.current += 1;

    if (timer.current) clearTimeout(timer.current);

    if (clickCount.current >= 5) {
      clickCount.current = 0;
      navigate("/admin/login");
      return;
    }

    timer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 1500);
  };

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
          {" "}—{" "}
          <span
            onClick={handleSecretClick}
            className="cursor-default select-none"
            title=""
          >
            © {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </footer>
  );
}
