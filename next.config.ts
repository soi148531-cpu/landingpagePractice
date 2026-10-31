import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
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
