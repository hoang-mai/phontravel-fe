import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "PhonTravel 20-10-2025",
  description: "Chúc các ban nữ một ngày 20/10 vui vẻ, hạnh phúc và tràn đầy yêu thương!",
};

export default function Layout({children,}: Readonly<{ children: ReactNode; }>) {
  return <>{children}</>;
}