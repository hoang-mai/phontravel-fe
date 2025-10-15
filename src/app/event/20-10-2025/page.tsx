"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Event2010Page() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <Link href="/event" className="inline-block mb-8 text-purple-600 hover:underline">
          ← Quay lại Sự kiện
        </Link>

        {/* Thiệp mời */}
        <motion.div
          className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 border-2 border-pink-200 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 rounded-full opacity-20 translate-x-20 translate-y-20"></div>
          <div className="absolute top-1/2 right-10 text-6xl opacity-10">🌸</div>
          <div className="absolute top-10 left-10 text-5xl opacity-10">💐</div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-6xl mb-4">🎊</div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Thiệp Mời
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-pink-700 mb-2">
                Ngày Phụ Nữ Việt Nam 20/10
              </div>
              <div className="text-lg text-gray-600">
                18 tháng 10 năm 2025
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>

            {/* Main content */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  &ldquo;Chúc các bạn nữ một ngày 20/10 vui vẻ, hạnh phúc và tràn đầy yêu thương!&rdquo;
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100">
                <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                  <span>📍</span> Địa điểm
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nhà anh Chũng<br/>
                  Chung cư Bộ đội Biên phòng<br/>
                  Cầu Diễn, Bắc Từ Liêm<br/>
                  Hà Nội
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100">
                  <h3 className="text-xl font-bold text-pink-700 mb-3 flex items-center gap-2">
                    <span>📅</span> Thời gian
                  </h3>
                  <p className="text-gray-700 text-lg">
                    19h-19h30, Thứ Bảy, 18/10/2025
                  </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100">
                  <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <span>👥</span> Số người
                  </h3>
                  <p className="text-gray-700 text-lg">
                    11 người tham gia
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Footer message */}
            <motion.div
              className="text-center mt-8 pt-6 border-t-2 border-pink-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-gray-600 text-lg mb-4">
                Rất mong được đón tiếp các bạn! 💕
              </p>
              <div className="flex justify-center gap-2 text-3xl">
                <span>🌹</span>
                <span>🌸</span>
                <span>🌺</span>
                <span>💐</span>
                <span>🌻</span>
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/*/!* Questions Button *!/*/}
        {/*<motion.div*/}
        {/*  className="mt-8 text-center"*/}
        {/*  initial={{ opacity: 0, y: 20 }}*/}
        {/*  animate={{ opacity: 1, y: 0 }}*/}
        {/*  transition={{ duration: 0.5, delay: 1.2 }}*/}
        {/*>*/}
        {/*  <Link*/}
        {/*    href="/event/20-10-2025/questions"*/}
        {/*    className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"*/}
        {/*  >*/}
        {/*    🎯 Tham gia câu hỏi vui*/}
        {/*  </Link>*/}
        {/*</motion.div>*/}

        {/* Additional info */}
        <motion.div
          className="mt-8 p-6 bg-white rounded-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-3">Lưu ý:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500">•</span>
              <span>Vui lòng xác nhận tham dự để các bạn nam chuẩn bị chu đáo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500">•</span>
              <span>Trang phục thoải mái</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500">•</span>
              <span>Mang theo niềm vui và nụ cười</span>
            </li>
          </ul>
        </motion.div>

      </main>
    </div>
  );
}
