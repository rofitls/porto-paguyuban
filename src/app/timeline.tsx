"use client";

import {
  Card,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";

interface TimelineItem {
  month: string;
  title: string;
  desc: string;
  highlight?: boolean;
  date?: string;
  location?: string;
  consumption?: string[];
  mapsUrl?: string;
  documentationUrl?: string;
  rundown?: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    month: "Februari",
    title: "Buka Puasa Bersama",
    highlight: false,
    date: "28 Februari 2026",
    location: "Tanjung Priok – Rumah Keluarga Budi",
    desc: "Kegiatan buka puasa bersama keluarga besar Paguyuban Asirin untuk mempererat silaturahmi di bulan Ramadhan.",
    rundown: [
      "Pembukaan acara",
      "Sambutan tuan rumah",
      "Pembacaan doa",
      "Games",
      "Kultum",
      "Buka bersama",
      "Sholat berjamaah",
      "Makan bersama",
      "Penutupan acara"
    ],
    consumption: [
      "Keluarga Budi: Sop Kimlo & Gorengan",
      "Keluarga Rini: Sate",
      "Keluarga Heru: -",
      "Keluarga Rosi: Sate",
      "Keluarga Tio: Sambosa Beef, Bakpau Unti Kelapa, & Risol Bihun",
      "Keluarga Teguh: -",
      "Keluarga Mapud: -",
      "Keluarga Opi: Pisang Goreng Madu",
    ],
    mapsUrl: "https://maps.app.goo.gl/ZeWpB96EM9v752BR7",
    documentationUrl: "https://drive.google.com/",
  },
  {
    month: "Mei",
    title: "Silaturahmi Keluarga (Ulang Tahun Om Edi)",
    highlight: true,
    date: "10 Mei 2026",
    location: "Bekasi – Rumah Keluarga Rini",
    desc: "Pertemuan rutin dan silaturahmi antar anggota keluarga paguyuban sekaligus ulang tahun Om Edi",
    rundown: [
      
    ],
    consumption: [
      "Keluarga Budi:",
      "Keluarga Rini:",
      "Keluarga Heru: Ikan Bili Cabe Ijo",
      "Keluarga Rosi:",
      "Keluarga Tio: Ayam",
      "Keluarga Teguh:",
      "Keluarga Mapud:",
      "Keluarga Opi: Pisang Madu",
    ],
    mapsUrl: "",
    documentationUrl: "https://drive.google.com/",
  },
  {
    month: "Juni",
    title: "Silaturahmi Keluarga",
    desc: "Pertemuan rutin dan silaturahmi antar anggota keluarga paguyuban.",
  },
  {
    month: "Agustus",
    title: "Agustusan",
    desc: "Perayaan Hari Kemerdekaan RI dengan lomba dan kegiatan kebersamaan.",
  },
  {
    month: "Oktober",
    title: "Silaturahmi Keluarga",
    desc: "Pertemuan rutin dan silaturahmi antar anggota keluarga paguyuban.",
  },
  {
    month: "Desember",
    title: "Tahun Baruan",
    desc: "Malam keakraban dan refleksi akhir tahun keluarga besar Paguyuban Asirin.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-28 px-8 bg-white">
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
                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-2">
                    <Typography variant="h6" className="font-bold">
                      {item.month}
                    </Typography>

                    {item.highlight && (
                      <Chip color="green" size="sm" value="Agenda Utama" />
                    )}
                  </div>

                  <Typography variant="h5" className="mb-2">
                    {item.title}
                  </Typography>

                  <Typography className="font-normal !text-gray-500 mb-4">
                    {item.desc}
                  </Typography>

                  {/* DETAIL INFO */}
                  {(item.date || item.location) && (
                    <ul className="text-sm text-gray-700 space-y-1 mb-4">
                      {item.date && (
                        <li>📅 <strong>Tanggal:</strong> {item.date}</li>
                      )}
                      {item.location && (
                        <li>📍 <strong>Lokasi:</strong> {item.location}</li>
                      )}
                    </ul>
                  )}

                  {/* RUNDOWN ACARA */}
                  {item.rundown && (
                    <div className="mb-4">
                      <Typography variant="small" className="font-semibold mb-2">
                        🕒 Rundown Acara:
                      </Typography>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                        {item.rundown.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* KONSUMSI */}
                  {item.consumption && (
                    <div className="mb-4">
                      <Typography variant="small" className="font-semibold mb-2">
                        🍱 Konsumsi:
                      </Typography>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {item.consumption.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* LINKS */}
                  {(item.mapsUrl || item.documentationUrl) && (
                    <div className="flex flex-wrap gap-4 text-sm">
                      {item.mapsUrl && (
                        <a
                          href={item.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          🗺️ Lihat Lokasi
                        </a>
                      )}
                      {item.documentationUrl && (
                        <a
                          href={item.documentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          📸 Dokumentasi
                        </a>
                      )}
                    </div>
                  )}
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
