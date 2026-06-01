"use client";

const TELEGRAM_URL = "https://t.me/nooo_design";

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
          <div className="flex min-w-0 flex-col justify-between px-5 py-6 sm:px-10 sm:py-9 lg:px-14 lg:py-11 xl:px-16">
            <p className="text-sm font-bold tracking-[0.18em]">SOLOMONOV</p>

            <div className="my-10 max-w-3xl lg:my-4">
              <h1
                className="text-[clamp(2.5rem,12vw,3.75rem)] font-bold leading-[0.92] tracking-[-0.04em] sm:text-[clamp(3.75rem,6vw,6.5rem)]"
                id="hero-heading"
              >
                Михаил
                <br />
                Соломонов
              </h1>
              <p className="mt-5 text-[clamp(1.4rem,6.5vw,1.75rem)] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[clamp(1.75rem,2.4vw,2.5rem)]">
                Веб-дизайнер &amp; AI-оператор
              </p>
              <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600 sm:text-xl sm:leading-8">
                Если вы открыли эту страницу, вероятно, рассматриваете мою
                кандидатуру. Здесь собраны избранные работы в области
                веб-дизайна, визуального контента и AI-инструментов.
              </p>
              <TelegramLink className="mt-6" telegramIcon />
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
        className="bg-[#0C0C0C] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-14 lg:py-40"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <h2
          className="text-[clamp(2.75rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-[-0.04em] sm:leading-[0.92]"
          id="projects-heading"
        >
          Избранные проекты
        </h2>

        <article className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)] lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap gap-2">
              {["Startup", "SaaS", "Next.js", "Tailwind"].map((tag) => (
                <span
                  className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-300"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              Название проекта
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              Здесь будет краткое описание проекта. Временный текст-заполнитель
              для настройки структуры карточки и визуальной иерархии.
            </p>
            <a
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-500 px-6 py-3 text-sm font-medium text-white outline-offset-4"
              href="#projects"
            >
              Смотреть проект
            </a>
          </div>

          <div
            aria-label="Место для изображения проекта"
            className="order-1 aspect-square rounded-[20px] bg-neutral-800 lg:order-2"
            role="img"
          />
        </article>
      </section>

      <section
        className="bg-[#0C0C0C] px-5 pb-24 pt-20 text-white sm:px-8 sm:pb-32 sm:pt-28 lg:px-14 lg:pb-40 lg:pt-36"
        id="contacts"
        aria-labelledby="contacts-heading"
      >
        <h2
          className="text-[clamp(2.75rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-[-0.04em] sm:leading-[0.92]"
          id="contacts-heading"
        >
          Связаться со мной
        </h2>

        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2">
          <a
            className="flex min-h-48 items-center justify-center rounded-[28px] bg-neutral-900 px-6 py-8 text-xl font-medium text-neutral-100 outline-offset-4 hover:bg-neutral-800"
            href={TELEGRAM_URL}
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="mr-3 h-6 w-6 shrink-0"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="m17.4 3.5-2.3 12.1c-.2.9-.7 1.1-1.4.7l-3.5-2.6-1.7 1.6c-.2.2-.4.4-.8.4l.3-3.6 6.5-5.9c.3-.3-.1-.4-.4-.2l-8 5-3.5-1.1c-.8-.2-.8-.8.2-1.2l13.7-5.3c.6-.2 1.2.2.9 1.1Z"
                fill="currentColor"
              />
            </svg>
            Телеграм
          </a>
          <a
            className="flex min-h-48 items-center justify-center rounded-[28px] bg-neutral-900 px-6 py-8 text-xl font-medium text-neutral-100 outline-offset-4 hover:bg-neutral-800"
            href="#contacts"
          >
            <svg
              aria-hidden="true"
              className="mr-3 h-7 w-7 shrink-0"
              fill="none"
              viewBox="0 0 28 28"
            >
              <path
                d="M3 5v18h4v-7.2c0-2 1.1-3.2 2.7-3.2 1.5 0 2.3 1 2.3 2.8V23h4v-8.3c0-3.8-2-5.8-5.2-5.8-1.6 0-2.9.6-3.8 1.8V5H3Zm14 0v18h4v-7.2c0-2 1.1-3.2 2.7-3.2.5 0 .9.1 1.3.3V9.1c-.2-.1-.5-.1-.8-.1-1.3 0-2.4.6-3.2 1.7V5h-4Z"
                fill="currentColor"
              />
            </svg>
            Резюме
          </a>
        </div>
      </section>
    </main>
  );
}
