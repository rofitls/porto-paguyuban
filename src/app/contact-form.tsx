"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function ContactForm() {
  const [active, setActive] = React.useState(0);
  const testimonials = [
    {
      name: "Imam Prasetyo",
      role: "Ketua Paguyuban",
      company: "Paguyuban Asirin",
      image: "/image/tio.png",
    },
    {
      name: "Rofi Tulus",
      role: "Wakil Ketua Paguyuban",
      company: "Paguyuban Asirin",
      image: "/image/rofi.jpeg",
    },
  ] as const;

  const current = testimonials[active];

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Kontak Kami
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Paguyuban ini dibangun atas kebersamaan dan komunikasi.
            Jika Anda memiliki pertanyaan, masukan, atau ingin terlibat dalam kegiatan, silakan hubungi pengurus atau bergabung di grup WhatsApp kami.
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                Pengurus Paguyuban
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                Pengurus paguyuban berperan dalam menjaga kebersamaan, mengoordinasikan kegiatan, serta menjadi penghubung antar anggota keluarga besar paguyuban.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                {current.name} – {current.role}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                {current.company}
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/tio.png"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${active === 0 ? "opacity-100" : "opacity-50"
                    }`}
                  onClick={() => setActive(0)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/rofi.jpeg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${active === 1 ? "opacity-100" : "opacity-50"
                    }`}
                  onClick={() => setActive(1)}
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={current.image}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
