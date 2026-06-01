"use client";

import { useEffect, useState } from "react";

const TELEGRAM_URL = "https://t.me/nooo_design";

const projects = [
  {
    id: "project-01",
    number: "01",
    title: "Название проекта",
    description: "Краткое описание проекта и выполненной задачи.",
  },
  {
    id: "project-02",
    number: "02",
    title: "Название проекта",
    description: "Краткое описание проекта и выполненной задачи.",
  },
  {
    id: "project-03",
    number: "03",
    title: "Название проекта",
    description: "Краткое описание проекта и выполненной задачи.",
  },
];

function TelegramLink({ className = "" }: { className?: string }) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white outline-offset-4 dark:bg-neutral-100 dark:text-neutral-950 ${className}`}
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
    >
      Написать в Telegram
      <span className="ml-3 text-base" aria-hidden="true">
        ↗
      </span>
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Включить светлую тему" : "Включить темную тему"}
    >
      <span aria-hidden="true">{isDark ? "☼" : "◐"}</span>
    </button>
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
    <main>
      <section
        className="flex min-h-screen flex-col px-5 pb-8 pt-5 sm:px-8 lg:px-14 lg:pb-12 lg:pt-8"
        aria-labelledby="hero-heading"
      >
        <header className="flex items-center justify-between">
          <p className="text-sm font-semibold tracking-[-0.02em]">
            Имя Фамилия
          </p>
          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-6 text-xs text-neutral-600 dark:text-neutral-400 sm:flex">
              <a href="#projects">Проекты</a>
              <a href="#contacts">Контакты</a>
            </nav>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </header>

        <div className="flex flex-1 items-center py-24">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              Портфолио дизайнера
            </p>
            <h1
              className="max-w-5xl text-[clamp(3.3rem,10vw,9rem)] font-semibold leading-[0.93] tracking-[-0.085em]"
              id="hero-heading"
            >
              Заголовок портфолио
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg">
              Краткое описание специализации, подхода к работе и типов задач.
            </p>
            <TelegramLink className="mt-10" />
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-neutral-300 pt-4 text-xs uppercase tracking-[0.13em] text-neutral-500 dark:border-neutral-800 dark:text-neutral-500">
          <span>Избранные работы</span>
          <span>Прокрутите вниз</span>
        </div>
      </section>

      <section
        className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <div className="grid gap-8 border-t border-neutral-300 pt-5 dark:border-neutral-800 lg:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 lg:col-span-4">
            01 — Проекты
          </p>
          <h2
            className="text-4xl font-semibold tracking-[-0.07em] sm:text-6xl lg:col-span-8 lg:text-7xl"
            id="projects-heading"
          >
            Избранные проекты
          </h2>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-14 sm:mt-20 lg:grid-cols-12 lg:gap-y-24">
          {projects.map((project, index) => (
            <article
              className={`group lg:col-span-6 ${
                index === 1 ? "lg:mt-32" : ""
              }`}
              key={project.id}
            >
              <div className="flex aspect-[4/3] items-center justify-center border border-neutral-300 bg-neutral-200 text-xs uppercase tracking-[0.18em] text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-600">
                {project.id}
              </div>
              <div className="grid grid-cols-[3rem_1fr] gap-3 border-b border-neutral-300 pb-5 pt-5 dark:border-neutral-800">
                <p className="text-xs text-neutral-500">{project.number}</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.05em]">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="bg-neutral-950 px-5 pb-7 pt-20 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-950 sm:px-8 sm:pt-28 lg:px-14 lg:pt-36"
        id="contacts"
        aria-labelledby="contacts-heading"
      >
        <div className="grid gap-8 border-t border-neutral-700 pt-5 dark:border-neutral-300 lg:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-600 lg:col-span-4">
            02 — Контакты
          </p>
          <div className="lg:col-span-8">
            <h2
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.075em] sm:text-7xl lg:text-8xl"
              id="contacts-heading"
            >
              Обсудим ваш проект
            </h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-neutral-400 dark:text-neutral-600">
              Краткая контактная информация и приглашение обсудить задачу.
            </p>
            <TelegramLink className="mt-10 !bg-white !text-neutral-950 dark:!bg-neutral-950 dark:!text-white" />
          </div>
        </div>

        <footer className="mt-24 flex flex-col gap-3 border-t border-neutral-700 pt-5 text-xs uppercase tracking-[0.13em] text-neutral-400 dark:border-neutral-300 dark:text-neutral-600 sm:mt-36 sm:flex-row sm:justify-between">
          <span>Имя Фамилия</span>
          <span>Портфолио дизайнера</span>
        </footer>
      </section>
    </main>
  );
}
