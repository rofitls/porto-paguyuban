"use client";

import { EventCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const EVENTS = [
  {
    img: "image/bukber_2026.jpeg",
    title: "Buka Puasa Bersama 2026",
    desc: "Buka puasa bersama keluarga besar Paguyuban Asirin dalam suasana kebersamaan bulan Ramadhan.",
  },
];

export function Events() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Acara & Kegiatan
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Melalui berbagai acara dan kegiatan, Paguyuban Asirin menjadi wadah berkumpul, berbagi, dan mempererat hubungan antar anggota keluarga.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Events;
