"use client";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  BanknotesIcon,
  HeartIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

export default function Donation() {
  return (
    <section id="donation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <Typography
          variant="h2"
          className="mb-4 font-bold text-gray-900"
        >
          Donasi
        </Typography>

        <Typography
          variant="paragraph"
          className="mb-10 text-gray-600"
        >
          Dukungan Anda sangat berarti untuk membantu kegiatan sosial,
          keagamaan, dan kebersamaan Paguyuban Asirin. Setiap donasi akan
          digunakan secara amanah dan bertanggung jawab.
        </Typography>

        {/* DONATION CARDS */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* BANK */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <BanknotesIcon className="mx-auto h-10 w-10 text-gray-800 mb-4" />
            <Typography className="font-semibold mb-1">
              Transfer Bank
            </Typography>
            <Typography className="text-sm text-gray-600">
              BCA<br />
              1234567890<br />
              a.n Paguyuban Asirin
            </Typography>
          </div>

          {/* E-WALLET */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <DevicePhoneMobileIcon className="mx-auto h-10 w-10 text-gray-800 mb-4" />
            <Typography className="font-semibold mb-1">
              E-Wallet
            </Typography>
            <Typography className="text-sm text-gray-600">
              DANA / OVO / GoPay<br />
              0813-1043-8216
            </Typography>
          </div>

          {/* SUPPORT */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <HeartIcon className="mx-auto h-10 w-10 text-red-500 mb-4" />
            <Typography className="font-semibold mb-1">
              Dukungan Moral
            </Typography>
            <Typography className="text-sm text-gray-600">
              Doa & partisipasi dalam kegiatan kami
            </Typography>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://wa.me/6281310438216"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" color="green">
              Donasi via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
