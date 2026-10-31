import type { Metadata } from "next";
import "./globals.css";
import { company } from "./content";

// 검색 결과·카톡 미리보기에 뜨는 제목과 설명
export const metadata: Metadata = {
  title: `${company.name} | ${company.addressShort} 금속 정밀가공 · CNC 선반 · 머시닝센터`,
  description: company.intro,
  openGraph: {
    title: `${company.name} — ${company.slogan}`,
    description: company.intro,
    type: "website",
    locale: "ko_KR",
    siteName: company.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
