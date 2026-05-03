export interface GalleryImage {
  url: string;
  title: string;
  description?: string;
  category?: string;
}

export const galleryImages: GalleryImage[] = [
  // Añade aquí tus imágenes de Cloudinary:
  // {
  //   url: "https://res.cloudinary.com/TU_CLOUD/image/upload/f_auto,q_auto,w_800/v123/foto.jpg",
  //   title: "Título de la imagen",
  //   description: "Descripción opcional",
  //   category: "Poríferos"
  // },
];

export const galleryCategories = [
  ...new Set(galleryImages.map((img) => img.category).filter(Boolean)),
] as string[];
