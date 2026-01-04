"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";

export function VisionMission() {
  return (
    <section className="py-28 px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Visi & Misi
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-7/12"
          >
            Paguyuban Asirin hadir sebagai ruang kebersamaan untuk menjaga
            silaturahmi, nilai kekeluargaan, dan kepedulian antar generasi.
          </Typography>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Visi */}
          <Card shadow={false} className="border border-gray-200">
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-4">
                Visi
              </Typography>
              <Typography className="font-normal !text-gray-600">
                Mewujudkan Paguyuban Asirin sebagai wadah kebersamaan keluarga
                yang rukun, saling peduli, dan berkelanjutan lintas generasi.
              </Typography>
            </CardBody>
          </Card>

          {/* Misi */}
          <Card shadow={false} className="border border-gray-200">
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-4">
                Misi
              </Typography>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Menjalin silaturahmi antar anggota keluarga.</li>
                <li>Menjadi media komunikasi dan koordinasi kegiatan paguyuban.</li>
                <li>Menumbuhkan rasa kepedulian dan gotong royong.</li>
                <li>Melestarikan nilai kekeluargaan dan tradisi leluhur.</li>
                <li>Mendukung kegiatan sosial, keagamaan, dan kemasyarakatan.</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;