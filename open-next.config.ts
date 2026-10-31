// OpenNext(Next.js → 클라우드플레어 변환기) 설정.
// 회사 소개 원페이지는 서버 캐시가 필요 없어서 기본값(캐시 없음)으로 둡니다.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});
