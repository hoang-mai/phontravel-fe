"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const floatingEmojis = ["🌸", "🌹", "🌺", "🌻", "💐", "🌷", "💕", "✨", "🦋", "🎀"];

function FloatingEmoji({ emoji, delay }: { emoji: string; delay: number }) {
  return (
    <motion.div
      className="absolute text-2xl md:text-3xl pointer-events-none select-none"
      initial={{
        x: Math.random() * 100 + "%",
        y: "110%",
        opacity: 0,
        rotate: 0,
      }}
      animate={{
        y: "-10%",
        opacity: [0, 1, 1, 0],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
}

export default function Event0803Page() {
  return (
    <div className="font-sans min-h-screen p-4 sm:p-8 pb-20 md:p-20 relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-rose-50">
      {/* Floating emojis background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingEmojis.map((emoji, i) => (
          <FloatingEmoji key={i} emoji={emoji} delay={i * 0.8} />
        ))}
      </div>

      <main className="max-w-4xl mx-auto relative z-10">
        <Link href="/event" className="inline-block mb-8 text-pink-600 hover:underline font-medium">
          ← Quay lại Sự kiện
        </Link>

        {/* Thiệp chúc mừng 8/3 */}
        <motion.div
          className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 border-2 border-pink-300 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full opacity-20 -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-200 rounded-full opacity-20 translate-x-24 translate-y-24"></div>
          <div className="absolute top-1/4 right-6 text-7xl opacity-10">🌸</div>
          <div className="absolute bottom-1/4 left-6 text-6xl opacity-10">🌹</div>
          <div className="absolute top-8 right-1/3 text-5xl opacity-10">💐</div>
          <div className="absolute bottom-8 left-1/3 text-5xl opacity-10">🦋</div>

          {/* Content */}
          <div className="relative z-10">
            {/* Ngày */}
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-block px-6 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold tracking-wider uppercase border border-pink-200">
                8 tháng 3 năm 2026
              </span>
            </motion.div>

            {/* Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                className="text-7xl md:text-8xl mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💐
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-3">
                Happy Women&apos;s Day
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-pink-700 mb-2">
                Chúc Mừng Ngày Quốc Tế Phụ Nữ
              </div>
              <div className="text-xl text-rose-500 font-medium">
                ✨ 8/3/2026 ✨
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="w-48 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 192 }}
              transition={{ duration: 1, delay: 0.7 }}
            ></motion.div>

            {/* Lời chúc chính */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 shadow-inner">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-4">
                  &ldquo;Gửi đến những người phụ nữ tuyệt vời nhất của PhonTravel,
                  <br />
                  <br />
                  Nhân ngày Quốc tế Phụ nữ 8/3, chúng mình xin gửi lời chúc tốt đẹp nhất đến tất cả các bạn nữ.
                  Chúc các bạn luôn xinh đẹp, tự tin, hạnh phúc và tràn đầy năng lượng!
                  <br />
                  <br />
                  Cảm ơn các bạn đã luôn là những người bạn đồng hành tuyệt vời.
                  Các bạn xứng đáng được yêu thương và trân trọng mỗi ngày!&rdquo;
                </p>
                <p className="text-pink-600 font-semibold text-lg">
                  — Từ các bạn nam PhonTravel 💕
                </p>
              </div>
            </motion.div>

            {/* Những lời chúc */}
            <motion.div
              className="grid md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 text-center">
                <div className="text-4xl mb-3">🌹</div>
                <h3 className="text-lg font-bold text-pink-700 mb-2">Xinh Đẹp</h3>
                <p className="text-gray-600">Chúc các bạn luôn rạng rỡ và tỏa sáng như những đóa hoa hồng</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 text-center">
                <div className="text-4xl mb-3">💪</div>
                <h3 className="text-lg font-bold text-rose-700 mb-2">Mạnh Mẽ</h3>
                <p className="text-gray-600">Chúc các bạn luôn tự tin, mạnh mẽ và vượt qua mọi thử thách</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 text-center">
                <div className="text-4xl mb-3">😊</div>
                <h3 className="text-lg font-bold text-pink-700 mb-2">Hạnh Phúc</h3>
                <p className="text-gray-600">Chúc các bạn luôn vui vẻ, hạnh phúc và có thật nhiều niềm vui</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 text-center">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-lg font-bold text-rose-700 mb-2">Thành Công</h3>
                <p className="text-gray-600">Chúc các bạn gặt hái nhiều thành công trong công việc và cuộc sống</p>
              </div>
            </motion.div>

            {/* Hoa tặng */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3, type: "spring" }}
            >
              <div className="inline-block bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 border border-pink-200">
                <p className="text-gray-700 font-medium mb-3">Một bó hoa nhỏ tặng các bạn 🎁</p>
                <div className="flex justify-center gap-3 text-4xl">
                  <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="cursor-pointer">🌹</motion.span>
                  <motion.span whileHover={{ scale: 1.3, rotate: -10 }} className="cursor-pointer">🌸</motion.span>
                  <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="cursor-pointer">🌺</motion.span>
                  <motion.span whileHover={{ scale: 1.3, rotate: -10 }} className="cursor-pointer">🌷</motion.span>
                  <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="cursor-pointer">🌻</motion.span>
                  <motion.span whileHover={{ scale: 1.3, rotate: -10 }} className="cursor-pointer">💐</motion.span>
                  <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="cursor-pointer">🌼</motion.span>
                </div>
              </div>
            </motion.div>

            {/* Footer message */}
            <motion.div
              className="text-center mt-8 pt-6 border-t-2 border-pink-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-pink-600 mb-4"
                animate={{
                  color: ["#db2777", "#e11d48", "#f43f5e", "#db2777"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Happy International Women&apos;s Day! 🎉
              </motion.p>
              <p className="text-gray-500 text-lg mb-4">
                Chúc tất cả các bạn nữ có một ngày 8/3 thật ý nghĩa! 💕
              </p>
              <div className="flex justify-center gap-2 text-3xl">
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>🌹</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>🌸</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}>💖</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}>🌺</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}>💐</motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Thông tin thêm */}
        <motion.div
          className="mt-8 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-3">💌 Lời nhắn nhủ:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500">💗</span>
              <span>Hãy luôn yêu thương bản thân mình nhé!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500">💗</span>
              <span>Các bạn xứng đáng được nhận những điều tốt đẹp nhất</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500">💗</span>
              <span>Mỗi ngày đều là ngày của phụ nữ, không chỉ riêng 8/3</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500">💗</span>
              <span>Cảm ơn các bạn vì đã luôn tuyệt vời như vậy!</span>
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}



