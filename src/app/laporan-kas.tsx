export default function LaporanKas() {
  return (
    <section id="laporan-kas" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Judul */}
        <h2 className="text-3xl font-bold mb-3">
          Laporan Kas Paguyuban
        </h2>
        <p className="text-gray-600 mb-10">
          Ringkasan tabungan sukarela keluarga dan transparansi penggunaan dana
        </p>

        {/* Ringkasan */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <SummaryCard title="Total Saldo Kas" value="Rp 99.999.999" />
          <SummaryCard title="Jumlah Keluarga" value="8 Keluarga" />
          <SummaryCard title="Update Terakhir" value="Maret 2026" />
        </div>

        {/* Button Spreadsheet */}
        <a
          href="https://docs.google.com/spreadsheets/d/XXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
        >
          📊 Lihat Detail di Spreadsheet
        </a>

        {/* Catatan */}
        <p className="text-xs text-gray-500 mt-4">
          * Data tabungan bersifat sukarela dan dikelola secara terbuka.
        </p>
      </div>
    </section>
  )
}

function SummaryCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  )
}
