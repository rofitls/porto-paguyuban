"use client";

import Image from "next/image";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
  Typography,
} from "@material-tailwind/react";
import { EventDetail } from "./events";

interface Props {
  open: boolean;
  handleOpen: () => void;
  event: EventDetail;
}

export default function EventDetailDialog({
  open,
  handleOpen,
  event,
}: Props) {
  return (
    <Dialog open={open} handler={handleOpen} size="lg">
      <DialogHeader>{event.title}</DialogHeader>

      <DialogBody divider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src={event.img}
            alt={event.title}
            width={768}
            height={768}
            className="rounded-lg object-cover w-full h-full"
          />

          <div>
            <Typography className="mb-4 !text-gray-600">
              {event.desc}
            </Typography>

            {/* DETAIL UTAMA */}
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li>📅 <strong>Tanggal:</strong> {event.date}</li>
              <li>📍 <strong>Lokasi:</strong> {event.location}</li>
              <li>👤 <strong>PIC:</strong> {event.pic}</li>
              <li>🍱 <strong>Konsumsi:</strong> {event.consumption}</li>
              <li>
                🗺️{" "}
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Lihat lokasi di Google Maps
                </a>
              </li>
              <li>
                📸{" "}
                <a
                  href={event.linkDocumentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Lihat dokumentasi acara
                </a>
              </li>
            </ul>
          </div>
        </div>
      </DialogBody>

      <div className="flex justify-end p-4">
        <Button variant="text" color="gray" onClick={handleOpen}>
          Tutup
        </Button>
      </div>
    </Dialog>
  );
}
