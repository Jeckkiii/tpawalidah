import { useState } from 'react';

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    {
      id: 1,
      title: 'Berkisah',
      date: '19 Maret 2025',
      description: 'Menebar inspirasi melalui kisah teladan dan keceriaan sulap dalam hangatnya kebersamaan buka puasa.',
      image: '/berkisah1.jpg',
      details: '"Berkisah" adalah ruang silaturahmi yang mengundang santri TPA sekitar untuk meneladani kisah inspiratif melalui tutur cerita dan keceriaan sulap, yang disatukan dalam hangatnya momen buka puasa bersama.',
      participants: 150
    },
   {
  id: 2,
  title: 'Indonesia Mendongeng',
  date: '25 Desember 2025',
  description: 'Kolaborasi bersama Rumah Zakat dalam memperkuat literasi religi santri melalui kisah-kisah teladan.',
  image: '/indonesia.jpg',
  details: 'Menjadi tuan rumah bagi 1000 santri dari berbagai TPA sekitar dalam acara "Indonesia Mendongeng" yang diselenggarakan oleh Rumah Zakat. Kegiatan ini berfokus pada penyampaian kisah teladan yang inspiratif untuk membangun karakter dan mempererat ukhuwah islamiyah.',
  participants: 1000
},
    {
  id: 3,
  title: 'Senja Berkisah',
  date: '7 Maret 2026',
  description: 'Momen kebersamaan santri se-Kapanewon Gamping dengan kisah inspiratif, buka puasa, dan pembagian doorprize.',
  image: '/senja.JPG',
  details: 'Acara ini menghadirkan 330 santri dari berbagai TPA di wilayah Kapanewon Gamping untuk mendengarkan kisah teladan di bulan Ramadan. Kegiatan dimeriahkan dengan pembagian doorprize menarik dan diakhiri dengan hangatnya suasana buka puasa bersama untuk mempererat silaturahmi.',
  participants: 330
},
    // {
    //   id: 4,
    //   title: 'Kegiatan Outbound',
    //   date: '5 Februari 2024',
    //   description: 'Kegiatan outbound untuk membangun teamwork dan karakter santri.',
    //   image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=600',
    //   details: 'Outbound ini meliputi berbagai permainan dan tantangan yang mengasah kemampuan bekerja sama dan kepemimpinan santri.',
    //   participants: 40
    // },
    // {
    //   id: 5,
    //   title: 'Kunjungan ke Panti Asuhan',
    //   date: '12 Januari 2024',
    //   description: 'Kunjungan sosial ke panti asuhan untuk berbagi kebahagiaan dengan anak-anak yatim.',
    //   image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=600',
    //   details: 'Santri TPA Walidah Dahlan mengunjungi panti asuhan dan membagikan bingkisan serta mengaji bersama anak-anak yatim.',
    //   participants: 35
    // },
    // {
    //   id: 6,
    //   title: 'Pelatihan Tajwid',
    //   date: '18 Desember 2023',
    //   description: 'Pelatihan intensif tajwid untuk meningkatkan kemampuan membaca Al-Quran yang benar.',
    //   image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600',
    //   details: 'Pelatihan ini diadakan selama 3 hari dengan instruktur profesional. Santri belajar kaidah-kaidah tajwid secara mendalam.',
    //   participants: 28
    // }
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50">
      {/* HEADER */}
      <header className="bg-[#269a57] text-white py-8 px-6 text-center">
        <h1 className="text-5xl font-black tracking-tight mb-4">Kegiatan TPA Walidah Dahlan</h1>
        <p className="text-xl opacity-90">Riwayat kegiatan dan acara yang telah kami laksanakan</p>
      </header>

      {/* ACTIVITIES LIST */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      loading="lazy"
                      className="w-full h-48 md:h-56 xl:h-64 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-black text-slate-900">{activity.title}</h3>
                      <span className="text-sm text-slate-500 font-medium">{activity.date}</span>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">{activity.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Peserta: {activity.participants} orang</span>
                      <button
                        onClick={() => setSelectedActivity(activity)}
                        className="bg-[#269a57] text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors"
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETAIL */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-black text-slate-900">{selectedActivity.title}</h2>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="text-slate-400 hover:text-slate-600 text-2xl"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                loading="lazy"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="space-y-4">
                <p className="text-slate-500 font-medium">{selectedActivity.date}</p>
                <p className="text-slate-600 leading-relaxed">{selectedActivity.details}</p>
                <p className="text-slate-500">Jumlah Peserta: {selectedActivity.participants} orang</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Activities;