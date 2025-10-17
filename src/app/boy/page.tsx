"use client";

import React, { useState } from "react";
import { members, type Member } from "@/untils/constant";

export default function BoyPage() {

  const maleMembers = members.filter((m) => m.gender === "male");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);


  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        {/* Members list (male) */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Thành viên Nam</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {maleMembers.map((m) => (
              <div key={m.name} className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-sm text-blue-900 font-medium">{m.name}</div>
                <div className="text-sm text-blue-700">Biệt danh: {m.nickname}</div>
                <div className="text-sm text-blue-700">Vai trò: {m.role}</div>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => setSelectedMember(m)}
                    className="cursor-pointer px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-md text-sm hover:bg-blue-50 transition"
                  >
                    Xem thêm
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Details modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedMember(null)} />
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
