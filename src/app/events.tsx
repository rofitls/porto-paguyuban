"use client";

import React from "react";
import { EventCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import EventDetailDialog from "./event-detail-dialog";

export interface EventDetail {
  img: string;
  title: string;
  desc: string;
  date: string;
  location: string;
  pic: string;
  consumption: string;
  mapsUrl: string;
  linkDocumentation: string;
}


const EVENTS: EventDetail[] = [
  {
    img: "/image/bukber_2026.jpeg",
    title: "Buka Puasa Bersama 2026",
    desc: "Buka puasa bersama keluarga besar Paguyuban Asirin dalam suasana kebersamaan bulan Ramadhan.",
    date: "Ramadhan 2026",
    location: "Tanjung Priok Rumah Bapak Budi",
    pic: "-",
    consumption: "Dibawa masing-masing",
    mapsUrl: "https://maps.app.goo.gl/ZeWpB96EM9v752BR7",
    linkDocumentation: "-",
  },
];


export function Events() {
  const [open, setOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState<EventDetail | null>(null);

  const handleOpen = (event?: EventDetail) => {
    if (event) setSelectedEvent(event);
    setOpen(!open);
  };
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
         {EVENTS.map((event, idx) => (
          <EventCard
            key={idx}
            {...event}
            onDetail={() => handleOpen(event)}
          />
        ))}
      </div>
      {selectedEvent && (
        <EventDetailDialog
          open={open}
          handleOpen={() => setOpen(false)}
          event={selectedEvent}
        />
      )}
    </section>
  );
}

export default Events;
