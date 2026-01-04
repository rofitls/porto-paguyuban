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
      waLabel: "+62 813-1043-8216",
      waLink: "https://wa.me/6281310438216",
      image: "/image/tio.png",
    },
    {
      name: "Rofi Tulus",
      role: "Wakil Ketua Paguyuban",
      waLabel: "+62 811-1139-785",
      waLink: "https://wa.me/628111139785",
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
              <a
                href={current.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-5 text-green-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M16 .396C7.28.396.16 7.52.16 16.24c0 2.88.8 5.68 2.32 8.16L0 32l7.84-2.4c2.4 1.28 5.04 2 7.76 2 8.72 0 15.84-7.12 15.84-15.84C31.84 7.52 24.72.396 16 .396zm0 28.96c-2.48 0-4.88-.64-7.04-1.92l-.48-.32-4.64 1.44 1.44-4.48-.32-.48c-1.28-2.08-2-4.48-2-6.96C2.96 8.88 8.88 2.96 16 2.96s13.04 5.92 13.04 13.04S23.12 29.36 16 29.36zm7.2-9.76c-.4-.24-2.32-1.12-2.64-1.28-.32-.16-.56-.24-.8.24s-.88 1.28-1.04 1.52c-.24.24-.4.32-.8.08-.4-.24-1.6-.56-3.04-1.84-1.12-.96-1.92-2.16-2.16-2.56-.24-.4 0-.64.16-.8.16-.16.4-.48.56-.64.16-.24.24-.4.4-.64.08-.24 0-.48-.08-.64-.08-.16-.8-1.92-1.12-2.64-.32-.72-.64-.56-.8-.56h-.64c-.24 0-.64.08-.96.48-.32.4-1.28 1.28-1.28 3.12s1.28 3.6 1.44 3.84c.16.24 2.56 4 6.16 5.6.88.4 1.6.64 2.16.8.88.24 1.68.24 2.32.16.72-.08 2.32-.96 2.64-1.92.32-.88.32-1.68.24-1.84-.08-.16-.32-.24-.64-.4z" />
                </svg>

                <Typography variant="small" className="font-normal">
                  {current.waLabel}
                </Typography>
              </a>
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
