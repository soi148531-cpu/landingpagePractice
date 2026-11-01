"use client";

import { useEffect, useRef } from "react";

// 숫자가 0부터 목표값까지 올라가는 효과 (카운트업)
// - 처음 화면(검색엔진·카톡 미리보기·자바스크립트 꺼진 환경)에는 완성된 숫자가 그대로 보입니다.
// - 화면에 보이는 순간 0부터 다시 세면서 올라갑니다.
// - 휴대폰의 "동작 줄이기"가 켜져 있으면 애니메이션 없이 숫자만 보여줍니다.
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // "±0.005" → 앞글자 "±", 숫자 0.005, 소수점 3자리
    const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!match) return;
    const [, prefix, numText, suffix] = match;
    const target = parseFloat(numText.replace(/,/g, ""));
    const decimals = numText.includes(".") ? numText.split(".")[1].length : 0;
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // 끝에서 천천히 멈추게
        el.textContent = format(target * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      el.textContent = format(0);
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} data-countup={value}>
      {value}
    </span>
  );
}
