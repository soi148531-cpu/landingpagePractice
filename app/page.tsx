import {
  company,
  stats,
  services,
  equipment,
  certifications,
  process,
  clients,
  history,
} from "./content";

// ---------------------------------------------------------------------
// 메뉴 항목. 각 섹션의 id와 맞춰야 합니다.
// ---------------------------------------------------------------------
const nav = [
  { href: "#about", label: "회사소개" },
  { href: "#services", label: "사업분야" },
  { href: "#equipment", label: "보유설비" },
  { href: "#quality", label: "품질·인증" },
  { href: "#history", label: "연혁" },
  { href: "#contact", label: "문의·위치" },
];

const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(company.naverMapQuery)}`;
const telHref = `tel:${company.phone.replaceAll("-", "")}`;

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Equipment />
        <Quality />
        <Process />
        <Clients />
        <History />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ====================================================================
   상단 고정 메뉴
   ==================================================================== */
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-steel-900">
              {company.name}
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-steel-500">
              {company.nameEn}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-steel-700 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-action">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="inline-flex h-11 items-center gap-2 rounded-[4px] bg-steel-900 px-4 text-sm font-bold text-white hover:bg-steel-800"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{company.phone}</span>
            <span className="sm:hidden">전화</span>
          </a>

          {/* 모바일 메뉴: 자바스크립트 없이 열고 닫히는 details 요소 */}
          <details className="relative md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-[4px] border border-steel-200 bg-white text-steel-800 [&::-webkit-details-marker]:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">메뉴 열기</span>
            </summary>
            <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-none border border-steel-200 bg-white p-1.5">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="block rounded-none px-3 py-2.5 text-sm font-semibold text-steel-800 hover:bg-steel-100"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

/* ====================================================================
   첫 화면 (히어로)
   ==================================================================== */
function Hero() {
  return (
    <section
      id="top"
      className="bg-brushed relative overflow-hidden bg-steel-950 text-white"
    >
      {/* 배경 장식: 큰 원형 가공물 느낌 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full border-[28px] border-steel-800/60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-24 h-[360px] w-[360px] rounded-full border-[18px] border-accent-400/20"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-none border border-steel-700 bg-steel-900/60 px-3 py-1 text-xs font-semibold tracking-wide text-steel-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            {company.addressShort} · 금속 정밀가공 전문
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-[3.4rem]">
            {company.slogan}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
            CNC 선반·머시닝센터 24대, 3차원 측정 전수 검사. 자동차·반도체 장비·산업기계
            부품을 ±0.005mm 공차로 안정 공급합니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-action px-6 text-base font-bold text-white hover:bg-action-hover"
            >
              도면 보내고 견적 받기
            </a>
            <a
              href="#equipment"
              className="inline-flex h-12 items-center justify-center rounded-[4px] border border-steel-600 px-6 text-base font-semibold text-white hover:bg-steel-800"
            >
              보유 설비 보기
            </a>
          </div>
        </div>

        {/* 사진 자리: 실제 고객의 공장 전경·설비 사진이 들어갈 곳 */}
        <div className="photo-slot flex aspect-[4/3] items-end rounded-none border border-steel-700/70 p-5 md:aspect-auto">
          <div className="relative z-10 w-full rounded-none border border-white/10 bg-steel-950/70 p-4 backdrop-blur">
            <p className="text-xs font-semibold tracking-wide text-steel-400">
              대표 가공 사례
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              자동차 변속기 하우징 · 알루미늄 A6061 · 4축 MCT
            </p>
            <p className="mt-0.5 text-xs text-steel-300">
              공차 ±0.01 · 월 12,000개 · 전수 CMM 검사
            </p>
          </div>
        </div>
      </div>

      {/* 숫자 4개 */}
      <div className="relative border-t border-steel-800 bg-steel-900/60">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-steel-800 px-4 sm:px-6 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="py-6 md:px-6 md:first:pl-0">
              <dd className="text-3xl font-extrabold tabular-nums tracking-tight text-white">
                {s.value}
                <span className="ml-0.5 text-base font-bold text-accent-400">{s.unit}</span>
              </dd>
              <dt className="mt-1 text-sm text-steel-400">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ====================================================================
   회사 소개
   ==================================================================== */
function About() {
  const facts = [
    ["설립", company.founded],
    ["대표", company.ceo],
    ["임직원", company.employees],
    ["소재지", company.addressShort],
  ];
  return (
    <Section id="about" eyebrow="ABOUT" title="회사 소개">
      <div className="grid gap-10 md:grid-cols-[1fr_320px]">
        <p className="text-lg leading-relaxed text-steel-700">{company.intro}</p>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-none border border-steel-200 bg-white p-6">
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-semibold tracking-wide text-steel-500">{k}</dt>
              <dd className="mt-1 text-base font-bold text-steel-900">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/* ====================================================================
   사업 분야
   ==================================================================== */
function Services() {
  return (
    <Section id="services" eyebrow="SERVICES" title="사업 분야" tone="muted">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group rounded-none border border-steel-200 bg-white p-6 transition-colors hover:border-steel-400"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-none bg-steel-900 text-accent-400 group-hover:bg-action group-hover:text-white">
              <ServiceIcon name={s.icon} className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-steel-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">{s.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ====================================================================
   보유 설비 (표)
   ==================================================================== */
function Equipment() {
  return (
    <Section
      id="equipment"
      eyebrow="EQUIPMENT"
      title="보유 설비"
      desc="주요 설비 현황입니다. 가공 범위 단위는 mm입니다."
    >
      <div className="overflow-hidden rounded-none border border-steel-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm tabular-nums">
            <thead className="bg-steel-900 text-xs font-semibold tracking-wide text-steel-200">
              <tr>
                <th className="px-5 py-3.5">설비명</th>
                <th className="px-5 py-3.5">제조사</th>
                <th className="px-5 py-3.5">보유 수량</th>
                <th className="px-5 py-3.5">가공 범위</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steel-100">
              {equipment.map((e) => (
                <tr key={e.name} className="hover:bg-steel-50">
                  <td className="px-5 py-4 font-bold text-steel-900">{e.name}</td>
                  <td className="px-5 py-4 text-steel-700">{e.maker}</td>
                  <td className="px-5 py-4 text-steel-700">{e.qty}</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-steel-700">{e.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 설비 사진 자리 3칸 */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {["CNC 선반 라인", "머시닝센터 라인", "측정실 (CMM)"].map((label) => (
          <div
            key={label}
            className="photo-slot flex aspect-[4/3] items-end rounded-none p-4"
          >
            <span className="relative z-10 rounded-none bg-steel-950/70 px-2.5 py-1 text-xs font-semibold text-steel-200">
              {label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ====================================================================
   품질 · 인증
   ==================================================================== */
function Quality() {
  return (
    <Section id="quality" eyebrow="QUALITY" title="품질 · 인증" tone="dark">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c) => (
          <div
            key={c.title}
            className="rounded-none border border-steel-700 bg-steel-900/70 p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-400/40 text-accent-400">
              <CheckIcon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">{c.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-steel-300">{c.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-steel-400">
        인증서 원본 및 측정 성적서 양식은 요청 시 이메일로 보내드립니다.
      </p>
    </Section>
  );
}

/* ====================================================================
   진행 순서
   ==================================================================== */
function Process() {
  return (
    <Section id="process" eyebrow="PROCESS" title="진행 순서" desc="처음 거래도 네 단계로 끝납니다.">
      <ol className="grid gap-4 md:grid-cols-4">
        {process.map((p, i) => (
          <li
            key={p.step}
            className="relative rounded-none border border-steel-200 bg-white p-6"
          >
            <span className="text-xs font-extrabold tracking-[0.2em] text-action">
              STEP {p.step}
            </span>
            <h3 className="mt-2 text-lg font-bold text-steel-900">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">{p.desc}</p>
            {i < process.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-steel-900 text-white md:flex"
              >
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ====================================================================
   주요 거래 분야
   ==================================================================== */
function Clients() {
  return (
    <Section id="clients" eyebrow="CLIENTS" title="주요 거래 분야" tone="muted">
      <ul className="flex flex-wrap gap-3">
        {clients.map((c) => (
          <li
            key={c}
            className="rounded-none border border-steel-200 bg-white px-5 py-2.5 text-sm font-semibold text-steel-800"
          >
            {c}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-steel-500">
        거래처명은 계약 조건에 따라 비공개입니다. 상세 납품 실적은 미팅 시 안내드립니다.
      </p>
    </Section>
  );
}

/* ====================================================================
   연혁
   ==================================================================== */
function History() {
  return (
    <Section id="history" eyebrow="HISTORY" title="연혁">
      <ol className="relative border-l-2 border-steel-200 pl-8">
        {history.map((h) => (
          <li key={h.year} className="relative pb-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-action ring-1 ring-steel-200"
            />
            <p className="text-sm font-extrabold tracking-wide text-action">{h.year}</p>
            <p className="mt-1 text-base font-medium text-steel-800">{h.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ====================================================================
   문의 · 위치
   ==================================================================== */
function Contact() {
  const rows = [
    ["주소", company.address],
    ["전화", company.phone],
    ["팩스", company.fax],
    ["이메일", company.email],
    ["영업시간", company.hours],
  ];
  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="문의 · 위치"
      desc="도면(PDF·DWG·STEP)을 이메일로 보내주시면 영업일 1~2일 내 견적을 회신합니다."
      tone="muted"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-none border border-steel-200 bg-white p-6 sm:p-8">
          <dl className="space-y-4">
            {rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[72px_1fr] gap-3 text-sm">
                <dt className="font-semibold text-steel-500">{k}</dt>
                <dd className="font-medium text-steel-900">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent("[견적문의] 회사명 / 품목 / 수량")}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-action text-sm font-bold text-white hover:bg-action-hover"
            >
              <MailIcon className="h-4 w-4" />
              이메일로 도면 보내기
            </a>
            <a
              href={telHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-steel-300 bg-white text-sm font-bold text-steel-900 hover:bg-steel-100"
            >
              <PhoneIcon className="h-4 w-4" />
              {company.phone}
            </a>
          </div>
        </div>

        {/* 지도 자리: 네이버 지도 인증키를 받으면 이 자리에 실제 지도를 넣습니다 */}
        <div className="photo-slot flex min-h-[280px] flex-col items-center justify-center rounded-none p-6 text-center">
          <div className="relative z-10">
            <PinIcon className="mx-auto h-10 w-10 text-accent-400" />
            <p className="mt-3 text-base font-bold text-white">{company.addressShort}</p>
            <p className="mt-1 text-sm text-steel-300">{company.address}</p>
            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-[4px] bg-white px-5 text-sm font-bold text-steel-900 hover:bg-steel-100"
            >
              네이버 지도에서 보기
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ====================================================================
   하단
   ==================================================================== */
function Footer() {
  return (
    <footer className="border-t border-steel-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-steel-500 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-bold text-steel-800">
            {company.name} <span className="font-normal text-steel-500">{company.nameEn}</span>
          </p>
          <p>
            대표 {company.ceo} · 사업자등록번호 {company.businessNumber} · {company.address}
          </p>
          <p>
            TEL {company.phone} · FAX {company.fax} · {company.email}
          </p>
        </div>
        <div className="space-y-1 md:text-right">
          <p>© {company.copyrightYear} {company.name}. All rights reserved.</p>
          <p className="inline-block rounded-none bg-steel-100 px-2 py-0.5 font-medium text-steel-600">
            연습용 샘플 사이트 · 가상의 회사입니다
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ====================================================================
   공통 섹션 틀
   ==================================================================== */
function Section({
  id,
  eyebrow,
  title,
  desc,
  tone = "light",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  desc?: string;
  tone?: "light" | "muted" | "dark";
  children: React.ReactNode;
}) {
  const bg =
    tone === "dark"
      ? "bg-brushed bg-steel-950 text-white"
      : tone === "muted"
        ? "bg-steel-100"
        : "bg-white";
  const eyebrowColor = tone === "dark" ? "text-accent-400" : "text-action";
  const titleColor = tone === "dark" ? "text-white" : "text-steel-900";
  const descColor = tone === "dark" ? "text-steel-300" : "text-steel-600";
  return (
    <section id={id} className={`${bg} py-16 sm:py-20`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className={`text-xs font-extrabold tracking-[0.22em] ${eyebrowColor}`}>{eyebrow}</p>
          <h2 className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${titleColor}`}>
            {title}
          </h2>
          {desc && <p className={`mt-3 text-base ${descColor}`}>{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ====================================================================
   아이콘 (이미지 파일 대신 코드로 그린 그림)
   ==================================================================== */
type IconProps = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Logo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect x="2" y="2" width="28" height="28" rx="7" className="fill-steel-900" />
      <circle cx="16" cy="16" r="7.5" className="fill-none stroke-accent-400" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="2.5" className="fill-accent-400" />
    </svg>
  );
}
function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}
function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2.2} aria-hidden>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2.4} aria-hidden>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
function ServiceIcon({
  name,
  className,
}: IconProps & { name: (typeof services)[number]["icon"] }) {
  switch (name) {
    case "lathe": // 선반: 회전하는 환봉
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
          <path d="M3 9h14a2 2 0 0 1 0 6H3z" />
          <path d="M3 9v6M8 9v6M13 9v6" />
          <path d="M19 12h2" />
        </svg>
      );
    case "mill": // 머시닝센터: 공구가 위에서 내려오는 모양
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
          <path d="M12 3v7M9 6h6" />
          <path d="m12 10 2 3h-4l2-3z" />
          <rect x="4" y="15" width="16" height="5" rx="1" />
        </svg>
      );
    case "wire": // 와이어컷: 가는 선이 판을 지나는 모양
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
          <rect x="4" y="7" width="16" height="10" rx="1" />
          <path d="M12 3v18" strokeDasharray="2 2" />
        </svg>
      );
    case "grind": // 연마: 회전 숫돌
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
          <circle cx="12" cy="10" r="6" />
          <circle cx="12" cy="10" r="1.5" />
          <path d="M4 20h16" />
        </svg>
      );
    case "assembly": // 조립: 맞물린 두 부품
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
          <rect x="3" y="8" width="9" height="8" rx="1" />
          <rect x="12" y="8" width="9" height="8" rx="1" />
          <path d="M12 10v4" />
        </svg>
      );
    case "inspect": // 검사: 캘리퍼스 느낌
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
          <path d="M4 6h16v4H4z" />
          <path d="M7 10v8M17 10v8M7 14h10" />
        </svg>
      );
  }
}
