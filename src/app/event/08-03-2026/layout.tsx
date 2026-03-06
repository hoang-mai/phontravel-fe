import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "PhonTravel 08-03-2026",
  description: "Chúc mừng ngày Quốc tế Phụ nữ 8/3 - Gửi đến những người phụ nữ tuyệt vời nhất!",
};

export default function Layout({children,}: Readonly<{ children: ReactNode; }>) {
  return <>{children}</>;
}

