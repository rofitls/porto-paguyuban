"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";

interface EventCardProps {
  img: string;
  title: string;
  desc: string;
}

export function EventCard({ img, title, desc }: EventCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* CARD */}
      <Card color="transparent" shadow={false}>
        <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover rounded-lg"
          />
        </CardHeader>

        <CardBody className="p-0">
          <Typography variant="h5" className="mb-2 text-blue-gray-900">
            {title}
          </Typography>

          <Typography className="mb-6 font-normal !text-gray-500">
            {desc}
          </Typography>

          <Button color="gray" size="sm" onClick={handleOpen}>
            Lihat Selengkapnya
          </Button>
        </CardBody>
      </Card>

      {/* MODAL DETAIL */}
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogHeader>{title}</DialogHeader>

        <DialogBody divider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src={img}
              alt={title}
              width={768}
              height={768}
              className="rounded-lg object-cover w-full h-full"
            />

            <div>
              <Typography className="mb-4 !text-gray-600">
                {desc}
              </Typography>

              {/* DETAIL TAMBAHAN */}
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  📅 <strong>Tanggal:</strong> 15 Maret 2026
                </li>
                <li>
                  📍 <strong>Lokasi:</strong> Rumah Keluarga Besar Asirin
                </li>
                <li>
                  👤 <strong>PIC:</strong> Imam Prasetyo
                </li>
                <li>
                  🍱 <strong>Konsumsi:</strong> Dibawa masing-masing
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
    </>
  );
}

export default EventCard;
