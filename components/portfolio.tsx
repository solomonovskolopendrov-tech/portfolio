"use client";

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

function TelegramLink({
  className = "",
  telegramIcon = false,
}: {
  className?: string;
  telegramIcon?: boolean;
}) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white outline-offset-4 dark:bg-neutral-100 dark:text-neutral-950 ${className}`}
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
    >
      Написать в Telegram
      {telegramIcon ? (
        <svg
          aria-hidden="true"
          className="ml-3 h-4 w-4"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d="m17.4 3.5-2.3 12.1c-.2.9-.7 1.1-1.4.7l-3.5-2.6-1.7 1.6c-.2.2-.4.4-.8.4l.3-3.6 6.5-5.9c.3-.3-.1-.4-.4-.2l-8 5-3.5-1.1c-.8-.2-.8-.8.2-1.2l13.7-5.3c.6-.2 1.2.2.9 1.1Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <span className="ml-3 text-base" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
}

export function Portfolio() {
  return (
    <main>
      <section
        className="min-h-screen bg-[#0C0C0C] p-5"
        aria-labelledby="hero-heading"
      >
        <div className="grid min-h-[calc(100vh-40px)] overflow-hidden rounded-[20px] bg-white text-neutral-950 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)]">
          <div className="flex flex-col justify-between px-6 py-6 sm:px-10 sm:py-9 lg:px-14 lg:py-11 xl:px-16">
            <p className="text-sm font-bold tracking-[0.18em]">SOLOMONOV</p>

            <div className="my-16 max-w-3xl lg:my-8">
              <h1
                className="text-[clamp(4.5rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.04em]"
                id="hero-heading"
              >
                Михаил
                <br />
                Соломонов
              </h1>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.17em] text-neutral-500 sm:text-base">
                Веб-дизайнер <span aria-hidden="true">•</span> AI-оператор
              </p>
              <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                Если вы открыли эту страницу, вероятно, рассматриваете мою
                кандидатуру. Здесь собраны избранные работы в области
                веб-дизайна, визуального контента и AI-инструментов.
              </p>
              <TelegramLink className="mt-9" telegramIcon />
            </div>

          </div>

          <div className="hidden py-6 pr-6 sm:py-9 sm:pr-10 lg:block lg:py-11 lg:pr-14 xl:pr-16">
            <div className="h-full overflow-hidden rounded-[20px]">
              <img
                alt="Портрет Михаила Соломонова"
                className="h-full w-full rounded-[20px] object-cover object-top"
                src="/portrait.webp"
              />
            </div>
          </div>
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
