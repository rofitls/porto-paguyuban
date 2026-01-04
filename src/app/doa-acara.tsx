"use client";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export function DoaAcara() {
  return (
    <section className="py-28 px-8 bg-gray-50">
      <div className="container mx-auto max-w-screen-md text-center">
        <Card shadow={false} className="bg-white">
          <CardBody className="p-10">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Doa Acara
            </Typography>

            <Typography className="mb-6 font-normal !text-gray-600">
              Bacaan doa yang biasa digunakan dalam berbagai kegiatan
              Paguyuban Asirin, seperti tahlilan, buka puasa bersama,
              pertemuan keluarga, dan acara kebersamaan lainnya.
            </Typography>

            <Typography className="mb-10 font-normal !text-gray-500">
              Doa ini disusun sebagai bentuk ikhtiar dan harapan agar setiap
              kegiatan diberikan kelancaran, keberkahan, serta mempererat
              tali silaturahmi antar anggota keluarga besar Paguyuban Asirin.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* DOWNLOAD PDF */}
              <a
                href="/docs/doa-acara-paguyuban-asirin.pdf"
                download
              >
                <Button color="green" size="lg">
                  📥 Download Doa Acara (PDF)
                </Button>
              </a>

              {/* LIHAT ONLINE */}
              <a
                href="/docs/doa-acara-paguyuban-asirin.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" color="green" size="lg">
                  👁️ Lihat Bacaan Online
                </Button>
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default DoaAcara;
