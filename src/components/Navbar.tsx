"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Trang Chủ", path: "/", icon: "🏠" },
    { name: "Các bạn nam", path: "/boy", icon: "👦" },
    { name: "Các bạn nữ", path: "/girl", icon: "👧" },
    { name: "Du Lịch", path: "/travel", icon: "🌍" },
    { name: "Sự Kiện", path: "/event", icon: "🎉" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
              ✈️ PhonTravel
            </span>
          </Link>

          <div className="flex space-x-1 sm:space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="hidden sm:inline">{item.icon} {item.name}</span>
                    <span className="sm:hidden">{item.icon}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
