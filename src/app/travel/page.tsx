
export default function TravelPage() {
  // Fake trips data for demo / development
  const trips = [
    {
      id: 1,
      title: "Ba Vì",
      date: "2024-07-15",
      location: "Ba Vì",
      image: "🏔️",
      excerpt: "Buổi sáng sương mù và hoàng hôn trên đỉnh núi cùng nhóm.",
      participants: 11
    },
    {
      id: 2,
      title: "Hạ Long",
      date: "2024-07-30",
      location: "Hạ Long",
      image: "🏖️",
      excerpt: "Tắm biển, nướng hải sản và hát hò suốt đêm.",
      participants: 10
    },
    {
      id: 3,
      title: "Huế",
      date: "2025-7-05",
      location: "Huế",
      image: "🏮",
      excerpt: "Đèn lồng, cà phê phố cổ và món ăn tuyệt vời.",
      participants: 6
    },
    {
      id: 4,
      title: "Đà Nẵng",
      date: "2025-07-07",
      location: "Đà Nẵng",
      image: "⛰️",
      excerpt: "Ngắm biển mây và thử thách đường đèo ấn tượng.",
      participants: 10
    },
  ];

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">🌍 Du Lịch</h1>
      <p className="text-gray-600 text-lg mb-8">
        Những chuyến du lịch đáng nhớ và kỷ niệm tuyệt vời của nhóm chúng ta
      </p>

      <div className="rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <article key={trip.id} className="bg-white rounded-lg shadow-sm border p-4 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">{trip.image}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{trip.title}</h3>
                  <div className="text-sm text-gray-500">{trip.location} • {trip.date}</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">{trip.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">Tham gia: {trip.participants}</div>
                <button className="px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition">
                  Xem thêm
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

}
