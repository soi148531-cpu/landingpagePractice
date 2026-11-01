"use client";

import { useEffect } from "react";

// 한 페이지 안에서 이동하는 링크(#about, #contact 등) 처리
// - 눌렀을 때 해당 칸으로 부드럽게 이동하되, 주소 끝에 "#contact" 같은 표시를 남기지 않습니다.
//   (표시가 남으면 새로고침할 때 첫 화면이 아니라 그 칸에서 시작하기 때문)
// - 주소에 표시가 이미 붙은 채로 열리면 지우고 첫 화면부터 보여줍니다.
export function InPageLinks() {
  useEffect(() => {
    // 새로고침해도 브라우저가 "보던 위치"로 내려가지 않고 항상 첫 화면부터 시작
    history.scrollRestoration = "manual";
    const toTop = () => {
      if (window.location.hash) {
        history.replaceState(history.state, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    };
    toTop();
    // 페이지 준비 과정에서 브라우저가 다시 이동시키는 경우까지 한 번 더 맞춤
    const late = window.setTimeout(toTop, 120);

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")!.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      // 모바일 메뉴가 열려 있으면 닫기
      link.closest("details")?.removeAttribute("open");
    };

    document.addEventListener("click", onClick);
    return () => {
      window.clearTimeout(late);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
