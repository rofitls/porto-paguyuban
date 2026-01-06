"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { galleryPhotos } from "../../data/gallery";

/* =======================
   TYPE
======================= */
type GalleryPhoto = {
  id: number;
  src: string;
  title: string;
  description: string;
};

/* =======================
   COMPONENT
======================= */
export default function Gallery() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<GalleryPhoto | null>(null);
  const [pause, setPause] = useState(false);

  /* =======================
     AUTOPLAY
  ======================= */
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const slider = sliderRef.current;
      const scrollAmount = slider.clientWidth;

      // kalau udah mentok kanan → balik ke awal
      if (
        slider.scrollLeft + scrollAmount >=
        slider.scrollWidth - scrollAmount
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <section id="gallery" className="py-20">
      {/* HEADER */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-3xl font-bold">Galeri Foto Lawas</h2>
        <p className="text-gray-500 mt-2">
          Kenangan keluarga yang tak tergantikan
        </p>
      </div>

      {/* CAROUSEL */}
      <div
        className="relative"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        onTouchStart={() => setPause(true)}
        onTouchEnd={() => setPause(false)}
      >
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6
          scrollbar-hide"
        >
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActive(photo)}
              className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw]
              cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={1200}
                height={800}
                className="rounded-2xl w-full h-[320px] md:h-[420px] lg:h-[480px]
                object-cover shadow-lg"
              />
              <div className="mt-3 text-center">
                <h3 className="font-semibold">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <Image
              src={active.src}
              alt={active.title}
              width={1200}
              height={900}
              className="rounded-lg w-full max-h-[70vh] object-contain"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{active.title}</h3>
              <p className="text-gray-600 mt-1">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
