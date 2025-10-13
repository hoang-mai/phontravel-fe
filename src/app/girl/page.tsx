"use client";

import { motion } from "framer-motion";

export default function GirlPage() {
  const posts = [
    {
      id: 1,
      title: "Lễ Hội Hoa Anh Đào",
      author: "Sarah",
      date: "05/10/2024",
      excerpt: "Một ngày thần tiên giữa những bông hoa màu hồng...",
      image: "🌸"
    },
    {
      id: 2,
      title: "Chuyến Đi Spa Cuối Tuần",
      author: "Emma",
      date: "20/09/2024",
      excerpt: "Thư giãn và chăm sóc bản thân tốt nhất...",
      image: "💆‍♀️"
    },
    {
      id: 3,
      title: "Phiêu Lưu Mua Sắm Trong Thành Phố",
      author: "Lisa",
      date: "28/08/2024",
      excerpt: "Tìm kiếm những viên ngọc ẩn trong các cửa hàng địa phương...",
      image: "🛍️"
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
          <h1 className="text-4xl font-bold mb-4 text-pink-700">
            👧 Phần Nữ
          </h1>
          <p className="text-gray-600 text-lg">
            Những cuộc phiêu lưu, câu chuyện và trải nghiệm từ các cô gái
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
                  <button className="text-pink-600 hover:underline font-medium">
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
