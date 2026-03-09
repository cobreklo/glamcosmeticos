import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Lorem Ipsum Dolor",
    category: "Categoría 1",
    image: gallery1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "2",
    title: "Consectetur Adipiscing",
    category: "Categoría 2",
    image: gallery3,
    description: "Sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    id: "3",
    title: "Sed Do Eiusmod",
    category: "Categoría 3",
    image: gallery4,
    description: "Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    id: "4",
    title: "Ut Labore Et Dolore",
    category: "Categoría 4",
    image: gallery5,
    description: "Duis aute irure dolor in reprehenderit in voluptate",
  },
  {
    id: "5",
    title: "Magna Aliqua",
    category: "Categoría 5",
    image: gallery6,
    description: "Velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: "6",
    title: "Quis Nostrud",
    category: "Categoría 6",
    image: gallery4,
    description: "Excepteur sint occaecat cupidatat non proident",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Servicio Lorem",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    price: "$XX",
    icon: "sparkles",
  },
  {
    id: "2",
    title: "Servicio Ipsum",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    price: "$XX",
    icon: "heart",
  },
  {
    id: "3",
    title: "Servicio Dolor",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    price: "$XX",
    icon: "camera",
  },
  {
    id: "4",
    title: "Servicio Amet",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    price: "$XX",
    icon: "palette",
  },
  {
    id: "5",
    title: "Servicio Consectetur",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    price: "$XX",
    icon: "wand",
  },
  {
    id: "6",
    title: "Servicio Adipiscing",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.",
    price: "$XX",
    icon: "crown",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore. Muy profesional y el resultado duró toda la noche.",
    rating: 5,
  },
  {
    id: "2",
    name: "Ipsum Dolor",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Es muy talentosa.",
    rating: 5,
  },
  {
    id: "3",
    name: "Dolor Amet",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5,
  },
];

export const categories = ["Todos", "Categoría 1", "Categoría 2", "Categoría 3", "Categoría 4", "Categoría 5", "Categoría 6"];
