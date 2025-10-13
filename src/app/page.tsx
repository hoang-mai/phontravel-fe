"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PhonTravel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-700">
            Những Chuyến Phiêu Lưu & Kỷ Niệm Của Nhóm
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Link href="/boy" className="group block">
              <motion.div
                className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-4">👦</div>
                <h2 className="text-2xl font-bold mb-2 text-blue-700">
                  Phần Nam
                </h2>
                <p className="text-gray-600">
                  Những câu chuyện và cuộc phiêu lưu của các chàng trai
                </p>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/girl" className="group block">
              <motion.div
                className="bg-pink-50 border border-pink-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-4">👧</div>
                <h2 className="text-2xl font-bold mb-2 text-pink-700">
                  Phần Nữ
                </h2>
                <p className="text-gray-600">
                  Những câu chuyện và cuộc phiêu lưu của các cô gái
                </p>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/event" className="group block">
              <motion.div
                className="bg-purple-50 border border-purple-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold mb-2 text-purple-700">
                  Sự Kiện
                </h2>
                <p className="text-gray-600">
                  Các sự kiện nhóm và khoảnh khắc đặc biệt
                </p>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-blue-100 to-purple-100 border border-gray-200 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Chào mừng đến với PhonTravel! ✈️</h3>
          <p className="text-gray-700 mb-4">
            Đây là không gian chung của chúng ta để ghi lại những chuyến đi, cuộc phiêu lưu và kỷ niệm cùng nhau.
            Khám phá từng phần để đọc các câu chuyện, xem ảnh và sống lại những trải nghiệm tuyệt vời của chúng ta.
          </p>
          <p className="text-gray-700">
            Nhấp vào bất kỳ phần nào ở trên để bắt đầu khám phá!
          </p>
        </motion.div>
      </main>
    </div>
  );
}
