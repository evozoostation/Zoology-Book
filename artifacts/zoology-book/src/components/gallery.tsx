import { useState } from "react";
import { cn } from "@/lib/utils";
import { galleryImages, galleryCategories, type GalleryImage } from "@/lib/gallery-data";
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>

      {index > 0 && (
        <button
          className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {index < images.length - 1 && (
        <button
          className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <div
        className="flex max-h-[90vh] max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.url}
          alt={img.title}
          className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
        />
        <div className="mt-4 text-center text-white">
          <p className="text-lg font-semibold">{img.title}</p>
          {img.description && (
            <p className="mt-1 text-sm text-white/70">{img.description}</p>
          )}
          <p className="mt-2 text-xs text-white/40">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Gallery({ onNavigateBack }: { onNavigateBack: () => void }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory
      ? galleryImages.filter((img) => img.category === activeCategory)
      : galleryImages;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === "ArrowLeft" && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
    if (e.key === "ArrowRight" && lightboxIndex < filtered.length - 1) setLightboxIndex(lightboxIndex + 1);
    if (e.key === "Escape") setLightboxIndex(null);
  };

  return (
    <div className="min-h-screen pb-24 lg:ml-72" onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* Header */}
      <header className="relative flex h-[200px] items-end overflow-hidden rounded-b-[40px] bg-gradient-to-br from-primary/90 to-primary/60 p-8 lg:p-12">
        <div className="relative max-w-4xl">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">
            Galería
          </Badge>
          <h1 className="text-balance text-3xl font-black tracking-tight text-white drop-shadow-md md:text-4xl lg:text-5xl">
            Galería de imágenes
          </h1>
          <p className="mt-3 text-lg text-white/90 drop-shadow">
            Colección visual del libro de zoología
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Category filter */}
        {galleryCategories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Todas
            </button>
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center text-muted-foreground">
            <Images className="mb-4 h-16 w-16 opacity-20" />
            <p className="text-xl font-semibold">La galería está vacía</p>
            <p className="mt-2 text-sm">
              Añade imágenes en{" "}
              <code className="rounded bg-muted px-1 text-xs">
                src/lib/gallery-data.ts
              </code>
            </p>
          </div>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filtered.map((img, idx) => (
              <div
                key={idx}
                className="group mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-border shadow-sm transition-all hover:shadow-lg"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="relative">
                  <img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/30">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
                <div className="bg-card p-3">
                  <p className="text-sm font-semibold text-foreground">{img.title}</p>
                  {img.description && (
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{img.description}</p>
                  )}
                  {img.category && (
                    <Badge variant="secondary" className="mt-2 text-[10px]">
                      {img.category}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 border-t border-border pt-8">
          <Button variant="outline" onClick={onNavigateBack} className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Volver al libro
          </Button>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(lightboxIndex - 1)}
          onNext={() => setLightboxIndex(lightboxIndex + 1)}
        />
      )}
    </div>
  );
}
