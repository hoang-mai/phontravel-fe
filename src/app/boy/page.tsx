"use client";

import { motion } from "framer-motion";

export default function BoyPage() {
  const posts = [
    {
      id: 1,
      title: "Chuyến Leo Núi Mạo Hiểm",
      author: "John",
      date: "01/10/2024",
      excerpt: "Một hành trình đầy cảm hứng chinh phục đỉnh núi...",
      image: "🏔️"
    },
    {
      id: 2,
      title: "Kỷ Niệm Ngày Biển",
      author: "Mike",
      date: "15/09/2024",
      excerpt: "Nắng, cát và những khoảng thời gian tuyệt vời...",
      image: "🏖️"
    },
    {
      id: 3,
      title: "Tour Ẩm Thực Thành Phố",
      author: "David",
      date: "20/08/2024",
      excerpt: "Khám phá những món ăn địa phương ngon nhất...",
      image: "🍜"
    }
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
          <h1 className="text-4xl font-bold mb-4 text-blue-700">
            👦 Phần Nam
          </h1>
          <p className="text-gray-600 text-lg">
            Những cuộc phiêu lưu, câu chuyện và trải nghiệm từ các chàng trai
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
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
                  {post.image}
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    {post.title}
                  </h2>
                  <div className="text-sm text-gray-500 mb-3">
                    Bởi {post.author} • {post.date}
                  </div>
                  <p className="text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-blue-600 hover:underline font-medium">
                    Đọc thêm →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
