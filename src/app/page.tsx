"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import React, {useState} from "react";
import {Member, members} from "@/untils/constant";

export default function Home() {

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.div
          className="text-center"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PhonTravel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-700">
            Những Chuyến Phiêu Lưu & Kỷ Niệm Của Nhóm
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          whileHover={{scale: 1.02}}
        >
          <p className="text-sm text-gray-600 mb-3 text-center">
            Avatar của nhóm trong lần đi du lịch đầu tiên với nhau ở Ba Vì
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Logo.jpg"
              alt="PhonTravel Logo"
              width={2048}
              height={1536}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
        <div>
          <p className="text-lg font-semibold mb-4 text-center">Các thành viên trong nhóm</p>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Tên</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Biệt danh</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Vai trò</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-white">Hành động</th>
              </tr>
              </thead>
              <tbody className="bg-white divide-y">
              {members.map((member, idx) => (
                <tr
                  key={member.name}
                  className={`transition-colors duration-150 ${idx % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100`}
                >
                  <td className="px-4 py-3 text-sm text-blue-900">{member.name}</td>
                  <td className="px-4 py-3 text-sm text-blue-700">{member.nickname}</td>
                  <td className="px-4 py-3 text-sm text-blue-700">{member.role}</td>
                  <td className="px-4 py-3 text-sm text-right">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-md text-sm hover:bg-blue-50 transition"
                    >
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Details modal/drawer */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedMember(null)}/>
            <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{selectedMember.name}</h3>
              <p className="text-sm text-blue-700 mb-1"><strong>Biệt danh:</strong> {selectedMember.nickname}</p>
              <p className="text-sm text-blue-700 mb-4"><strong>Vai trò:</strong> {selectedMember.role}</p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300 transition"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
