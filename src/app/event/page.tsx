"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EventPage() {
  const events = [
    {
      id: 1,
      title: "20/10",
      date: "18/10/2025",
      location: "Nhà anh Chũng ở chung cư bộ đội biên phòng, Cầu Diễn, Bắc Từ Liêm, Hà Nội",
      description: "Chúc các bạn nữ một ngày 20/10 vui vẻ, hạnh phúc và tràn đầy yêu thương!",
      image: "🎊",
      attendees: 11,
      url: "/event/20-10-2025"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-purple-700">
            🎉 Sự Kiện Nhóm
          </h1>
          <p className="text-gray-600 text-lg">
            Những khoảnh khắc đặc biệt và buổi gặp mặt mà chúng ta đã chia sẻ cùng nhau
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event) => (
            <motion.article
              key={event.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <motion.div
                  className="text-5xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {event.image}
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    {event.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                    <span>👥 {event.attendees} người tham gia</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {event.description}
                  </p>
                  <Link
                    className="text-purple-600 hover:underline font-medium"
                    href={event.url}
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
