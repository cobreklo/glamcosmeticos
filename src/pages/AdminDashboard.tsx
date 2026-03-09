import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { galleryItems as initialGallery, services as initialServices, type GalleryItem, type Service } from "@/lib/data";
import { LogOut, Plus, Trash2, Image, Briefcase, Home, Edit2, Save, X } from "lucide-react";

type Tab = "gallery" | "services";

export default function AdminDashboard() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("gallery");
  const [gallery, setGallery] = useState<GalleryItem[]>(initialGallery);
  const [servicesList, setServicesList] = useState<Service[]>(initialServices);
  const [editingId, setEditingId] = useState<string | null>(null);

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  const deleteGalleryItem = (id: string) => setGallery(gallery.filter((g) => g.id !== id));
  const deleteService = (id: string) => setServicesList(servicesList.filter((s) => s.id !== id));

  const addGalleryItem = () => {
    const newItem: GalleryItem = {
      id: Date.now().toString(),
      title: "Nuevo Trabajo",
      category: "Ojos",
      image: gallery[0]?.image || "",
      description: "Descripción del nuevo trabajo",
    };
    setGallery([newItem, ...gallery]);
    setEditingId(newItem.id);
  };

  const addService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      title: "Nuevo Servicio",
      description: "Descripción del servicio",
      price: "$XX",
      icon: "sparkles",
    };
    setServicesList([newService, ...servicesList]);
    setEditingId(newService.id);
  };

  const updateGalleryField = (id: string, field: keyof GalleryItem, value: string) => {
    setGallery(gallery.map((g) => (g.id === id ? { ...g, [field]: value } : g)));
  };

  const updateServiceField = (id: string, field: keyof Service, value: string) => {
    setServicesList(servicesList.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-display text-xl font-bold text-gradient">✨ Admin Panel</h1>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="w-4 h-4" /> Ver Sitio
            </button>
            <button
              onClick={() => { logout(); navigate("/admin/login"); }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              <LogOut className="w-4 h-4" /> Salir
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setTab("gallery")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
              tab === "gallery"
                ? "bg-gradient-accent text-primary-foreground shadow-glow"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            <Image className="w-4 h-4" /> Galería ({gallery.length})
          </button>
          <button
            onClick={() => setTab("services")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
              tab === "services"
                ? "bg-gradient-accent text-primary-foreground shadow-glow"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            <Briefcase className="w-4 h-4" /> Servicios ({servicesList.length})
          </button>
        </div>

        {/* Gallery Tab */}
        {tab === "gallery" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Gestionar Galería</h2>
              <button
                onClick={addGalleryItem}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-primary-foreground text-sm font-semibold shadow-glow hover:opacity-90 transition-opacity"
              >
                <Plus className="w-4 h-4" /> Agregar
              </button>
            </div>

            <div className="grid gap-4">
              {gallery.map((item) => (
                <div key={item.id} className="bg-gradient-card rounded-lg border border-border p-4 flex gap-4 items-start">
                  <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                  
                  {editingId === item.id ? (
                    <div className="flex-1 space-y-2">
                      <input
                        value={item.title}
                        onChange={(e) => updateGalleryField(item.id, "title", e.target.value)}
                        className="w-full px-3 py-1.5 rounded bg-secondary text-foreground border border-border text-sm"
                      />
                      <input
                        value={item.category}
                        onChange={(e) => updateGalleryField(item.id, "category", e.target.value)}
                        className="w-full px-3 py-1.5 rounded bg-secondary text-foreground border border-border text-sm"
                        placeholder="Categoría"
                      />
                      <input
                        value={item.description}
                        onChange={(e) => updateGalleryField(item.id, "description", e.target.value)}
                        className="w-full px-3 py-1.5 rounded bg-secondary text-foreground border border-border text-sm"
                      />
                      <div className="flex gap-2">
                        <button onClick={() => setEditingId(null)} className="flex items-center gap-1 text-xs text-primary hover:opacity-80">
                          <Save className="w-3 h-3" /> Guardar
                        </button>
                        <button onClick={() => setEditingId(null)} className="flex items-center gap-1 text-xs text-muted-foreground hover:opacity-80">
                          <X className="w-3 h-3" /> Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-xs text-primary">{item.category}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  )}

                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => setEditingId(editingId === item.id ? null : item.id)}
                      className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteGalleryItem(item.id)}
                      className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {tab === "services" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Gestionar Servicios</h2>
              <button
                onClick={addService}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-primary-foreground text-sm font-semibold shadow-glow hover:opacity-90 transition-opacity"
              >
                <Plus className="w-4 h-4" /> Agregar
              </button>
            </div>

            <div className="grid gap-4">
              {servicesList.map((service) => (
                <div key={service.id} className="bg-gradient-card rounded-lg border border-border p-4">
                  {editingId === service.id ? (
                    <div className="space-y-2">
                      <input
                        value={service.title}
                        onChange={(e) => updateServiceField(service.id, "title", e.target.value)}
                        className="w-full px-3 py-1.5 rounded bg-secondary text-foreground border border-border text-sm"
                      />
                      <textarea
                        value={service.description}
                        onChange={(e) => updateServiceField(service.id, "description", e.target.value)}
                        rows={2}
                        className="w-full px-3 py-1.5 rounded bg-secondary text-foreground border border-border text-sm resize-none"
                      />
                      <input
                        value={service.price}
                        onChange={(e) => updateServiceField(service.id, "price", e.target.value)}
                        className="w-full px-3 py-1.5 rounded bg-secondary text-foreground border border-border text-sm"
                        placeholder="Precio"
                      />
                      <div className="flex gap-2">
                        <button onClick={() => setEditingId(null)} className="flex items-center gap-1 text-xs text-primary hover:opacity-80">
                          <Save className="w-3 h-3" /> Guardar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        <p className="text-primary font-bold mt-1">{service.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingId(service.id)}
                          className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteService(service.id)}
                          className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-center text-muted-foreground text-xs mt-12">
          ⚠️ Los cambios son temporales (en memoria). Conecta Firebase para persistencia.
        </p>
      </div>
    </div>
  );
}
