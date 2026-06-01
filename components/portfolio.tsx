"use client";

import { useEffect, useState } from "react";

const TELEGRAM_URL = "https://t.me/nooo_design";

const projects = [
  {
    id: "project-01",
    number: "01",
    title: "Айдентика для кофейни",
    description:
      "Визуальная система, упаковка и цифровые материалы для камерного городского пространства.",
    category: "Брендинг",
    year: "2025",
    preview: "preview-sun",
  },
  {
    id: "project-02",
    number: "02",
    title: "Сайт архитектурного бюро",
    description:
      "Спокойный цифровой каталог проектов с ясной типографикой и вниманием к деталям.",
    category: "Веб-дизайн",
    year: "2025",
    preview: "preview-grid",
  },
  {
    id: "project-03",
    number: "03",
    title: "Культурный фестиваль",
    description:
      "Гибкая графическая система для афиш, навигации и коммуникаций в социальных сетях.",
    category: "Арт-дирекшн",
    year: "2024",
    preview: "preview-type",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function TelegramLink({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      className={`group inline-flex min-h-14 items-center gap-5 rounded-full px-6 text-sm font-semibold transition-all duration-300 ${
        inverted
          ? "bg-[#f3efe6] text-[#181b1b] hover:bg-[#d7ff64]"
          : "bg-[#181b1b] text-[#f3efe6] hover:bg-[#d7ff64] hover:text-[#181b1b] dark:bg-[#f3efe6] dark:text-[#181b1b] dark:hover:bg-[#d7ff64]"
      }`}
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
    >
      Написать в Telegram
      <ArrowIcon />
    </a>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  const isDark = theme === "dark";

  return (
    <button
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#181b1b]/20 transition-colors hover:border-[#181b1b] dark:border-[#f3efe6]/25 dark:hover:border-[#f3efe6]"
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Включить светлую тему" : "Включить темную тему"}
    >
      <span
        className={`block h-4 w-4 rounded-full border border-current transition-all duration-300 ${
          isDark ? "bg-[#d7ff64]" : "bg-[#181b1b] group-hover:bg-[#d7ff64]"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div
      className={`project-preview ${project.preview} relative aspect-[4/3] overflow-hidden rounded-[1.75rem]`}
    >
      {project.preview === "preview-sun" && (
        <>
          <div className="absolute -right-[7%] -top-[15%] h-[68%] w-[68%] rounded-full bg-[#ff623b]" />
          <div className="absolute bottom-[9%] left-[8%] h-[48%] w-[38%] rounded-full border-[1.2rem] border-[#181b1b]" />
          <p className="absolute bottom-[10%] right-[8%] text-right text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.78] tracking-[-0.12em] text-[#181b1b]">
            NO
            <br />
            01
          </p>
        </>
      )}
      {project.preview === "preview-grid" && (
        <>
          <div className="absolute inset-[8%] grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                className={`rounded-full border border-[#d7ff64]/60 ${
                  index === 4 ? "bg-[#d7ff64]" : ""
                }`}
                key={index}
              />
            ))}
          </div>
          <p className="absolute bottom-[8%] left-[8%] text-xs font-bold uppercase tracking-[0.28em] text-[#d7ff64]">
            Space / Form
          </p>
        </>
      )}
      {project.preview === "preview-type" && (
        <>
          <p className="absolute -left-[3%] top-[1%] text-[clamp(7rem,19vw,16rem)] font-black leading-none tracking-[-0.18em] text-[#181b1b]">
            A
          </p>
          <p className="absolute bottom-[8%] right-[7%] max-w-[9rem] text-right text-xs font-bold uppercase leading-5 tracking-[0.22em] text-[#181b1b]">
            Culture
            <br />
            in motion
          </p>
        </>
      )}
      <span className="absolute right-5 top-5 rounded-full border border-current/30 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
        {project.number}
      </span>
    </div>
  );
}

export function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <main className="overflow-hidden">
      <section
        className="relative flex min-h-screen flex-col px-5 pb-6 pt-5 sm:px-8 lg:px-14 lg:pb-8 lg:pt-7"
        aria-labelledby="hero-heading"
      >
        <div className="hero-glow" aria-hidden="true" />
        <header className="relative z-10 flex items-center justify-between">
          <a className="text-sm font-black uppercase tracking-[-0.04em]" href="#">
            Имя Фамилия<span className="text-[#ff623b]">.</span>
          </a>
          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.12em] sm:flex">
              <a className="nav-link" href="#projects">
                Проекты
              </a>
              <a className="nav-link" href="#contacts">
                Контакты
              </a>
            </nav>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </header>

        <div className="relative z-10 flex flex-1 items-center py-24 lg:py-32">
          <div className="w-full">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff623b]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#181b1b]/55 dark:text-[#f3efe6]/60">
                Независимый дизайнер / Москва
              </p>
            </div>
            <h1
              className="max-w-7xl text-[clamp(4.3rem,13.5vw,13rem)] font-black leading-[0.77] tracking-[-0.13em]"
              id="hero-heading"
            >
              Делаю
              <br />
              <span className="ml-[7vw] text-[#ff623b]">видимым</span>
            </h1>
            <div className="mt-11 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
              <p className="max-w-md text-base leading-7 text-[#181b1b]/65 dark:text-[#f3efe6]/65 sm:text-lg">
                Создаю айдентику и цифровые продукты, которые помогают брендам
                говорить ясно и выглядеть уверенно.
              </p>
              <TelegramLink />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between border-t border-[#181b1b]/20 pt-4 text-[0.65rem] font-bold uppercase tracking-[0.19em] text-[#181b1b]/55 dark:border-[#f3efe6]/20 dark:text-[#f3efe6]/55">
          <span>Портфолио / 2026</span>
          <a className="nav-link" href="#projects">
            Смотреть проекты ↓
          </a>
        </div>
      </section>

      <section
        className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <div className="grid gap-7 border-t border-[#181b1b]/20 pt-5 dark:border-[#f3efe6]/20 lg:grid-cols-12">
          <p className="section-label lg:col-span-4">01 / Проекты</p>
          <h2
            className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.1em] sm:text-7xl lg:col-span-8 lg:text-8xl"
            id="projects-heading"
          >
            Избранные
            <br />
            работы<span className="text-[#ff623b]">.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-x-7 gap-y-16 sm:mt-24 lg:grid-cols-12 lg:gap-y-24">
          {projects.map((project, index) => (
            <article
              className={`group lg:col-span-6 ${index === 1 ? "lg:mt-36" : ""}`}
              key={project.id}
            >
              <ProjectPreview project={project} />
              <div className="grid grid-cols-[2.8rem_1fr] gap-3 border-b border-[#181b1b]/20 pb-6 pt-5 dark:border-[#f3efe6]/20">
                <p className="text-xs font-bold text-[#181b1b]/50 dark:text-[#f3efe6]/50">
                  {project.number}
                </p>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black tracking-[-0.065em]">
                      {project.title}
                    </h3>
                    <ArrowIcon />
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#181b1b]/60 dark:text-[#f3efe6]/60">
                    {project.description}
                  </p>
                  <p className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#181b1b]/45 dark:text-[#f3efe6]/45">
                    {project.category} / {project.year}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#181b1b] px-5 pb-7 pt-20 text-[#f3efe6] sm:px-8 sm:pt-28 lg:px-14 lg:pt-36"
        id="contacts"
        aria-labelledby="contacts-heading"
      >
        <div className="contact-orb" aria-hidden="true" />
        <div className="relative z-10 grid gap-8 border-t border-[#f3efe6]/25 pt-5 lg:grid-cols-12">
          <p className="section-label !text-[#f3efe6]/55 lg:col-span-4">
            02 / Контакты
          </p>
          <div className="lg:col-span-8">
            <h2
              className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.12em]"
              id="contacts-heading"
            >
              Начнем
              <br />
              <span className="text-[#d7ff64]">проект?</span>
            </h2>
            <p className="mt-9 max-w-lg text-base leading-7 text-[#f3efe6]/60 sm:text-lg">
              Расскажите о задаче, сроках и формате работы. Я отвечу и предложу
              следующий шаг.
            </p>
            <div className="mt-10">
              <TelegramLink inverted />
            </div>
          </div>
        </div>

        <footer className="relative z-10 mt-28 flex flex-col gap-3 border-t border-[#f3efe6]/25 pt-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#f3efe6]/50 sm:mt-40 sm:flex-row sm:justify-between">
          <span>Имя Фамилия</span>
          <span>Дизайн / Арт-дирекшн / 2026</span>
        </footer>
      </section>
    </main>
  );
}
