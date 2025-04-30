import React, { useState } from 'react';

export default function GalleryPage() {
  // dynamically build gallery items for IBEX images 0–37
  const galleryItems = Array.from({ length: 38 }, (_, i) => ({
    src: `https://theimperative.in/images/Events/Ibex/${i}.png`,
    alt: `IBEX 2024 – Image ${i + 1}`,
  }));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = idx => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prev = () =>
    setCurrentIndex(i => (i === 0 ? galleryItems.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex(i => (i === galleryItems.length - 1 ? 0 : i + 1));

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
        IBEX 2024 Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
            onClick={() => openLightbox(idx)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold px-2 text-center">
                {item.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 text-white text-4xl hover:opacity-80 transition"
          >
            &#8249;
          </button>

          {/* Current Image */}
          <img
            src={galleryItems[currentIndex].src}
            alt={galleryItems[currentIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 text-white text-4xl hover:opacity-80 transition"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
