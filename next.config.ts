import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents / partialPrefetching은 끈다.
  // 클라우드플레어 실행 환경에서 이 기능이 켜져 있으면 사이트가 멈춘다 (Error 1101).
  // 회사 소개 페이지는 내용이 바뀌지 않아서 필요 없는 기능이다.
  images: {
    // 클라우드플레어의 유료 이미지 최적화 기능을 쓰지 않고 이미지를 그대로 보여줍니다.
    // 대신 사진은 올리기 전에 미리 용량을 줄여서 넣습니다.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
