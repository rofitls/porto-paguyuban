"use client";

import {
  Card,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";

const TIMELINE = [
  {
    month: "Februari",
    title: "Buka Puasa Bersama",
    highlight: false,
    desc: "Kegiatan buka puasa bersama keluarga besar Paguyuban Asirin untuk mempererat silaturahmi di bulan Ramadhan.",
  },
  {
    month: "April",
    title: "Silaturahmi Keluarga",
    highlight: false,
    desc: "Pertemuan rutin dan silaturahmi antar anggota keluarga paguyuban.",
  },
  {
    month: "Juni",
    title: "Silaturahmi Keluarga",
    highlight: false,
    desc: "Pertemuan rutin dan silaturahmi antar anggota keluarga paguyuban.",
  },
  {
    month: "Agustus",
    title: "Agustusan",
    highlight: false,
    desc: "Perayaan Hari Kemerdekaan RI dengan lomba dan kegiatan kebersamaan.",
  },
  {
    month: "Oktober",
    title: "Silaturahmi Keluarga",
    highlight: false,
    desc: "Pertemuan rutin dan silaturahmi antar anggota keluarga paguyuban.",
  },
  {
    month: "Desember",
    title: "Tahun Baruan",
    highlight: false,
    desc: "Malam keakraban dan refleksi akhir tahun keluarga besar Paguyuban Asirin.",
  },
];

export function Timeline() {
  return (
    <section className="py-28 px-8 bg-white">
      <div className="container mx-auto max-w-screen-md">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Timeline Kegiatan Tahunan
          </Typography>
          <Typography className="mx-auto font-normal !text-gray-500">
            Rangkaian agenda dan kegiatan Paguyuban Asirin dalam satu tahun.
          </Typography>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-blue-gray-100 pl-6 space-y-12">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative">
              {/* DOT */}
              <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-green-500"></div>

              <Card shadow={false} className="border border-gray-100">
                <CardBody>
                  <div className="flex items-center justify-between mb-2">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {item.month}
                    </Typography>

                    {item.highlight && (
                      <Chip
                        color="green"
                        size="sm"
                        value="Agenda Utama"
                      />
                    )}
                  </div>

                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2"
                  >
                    {item.title}
                  </Typography>

                  <Typography className="font-normal !text-gray-500">
                    {item.desc}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
