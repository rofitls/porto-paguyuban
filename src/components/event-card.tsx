"use client";

import { useState } from "react";
import Image from "next/image";
import { EventDetail } from "@/app/events";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface EventCardProps extends EventDetail {
  onDetail: () => void;
}

export function EventCard({ img, title, desc, onDetail }: EventCardProps) {
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

          <Button size="sm" color="gray" onClick={onDetail}>
            Lihat Selengkapnya
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default EventCard;
