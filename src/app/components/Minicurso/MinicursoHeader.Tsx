import router from "next/router";

interface MinicursoHeaderProps {
  readonly dayOfWeek: string;
  readonly pageTitle: string;
  readonly bgColor?: string;
  readonly textColor?: string;
}

export default function MinicursoHeader({
  dayOfWeek,
  pageTitle,
  bgColor,
  textColor,
}: MinicursoHeaderProps) {
  const headerColor = bgColor ?? "#0e1226";
  const headerTextColor = textColor ?? "#FFFFFF";

  return (
    <header>
      <div
        className={`w-full p-6 md:p-12 flex items-center justify-between`}
        style={{
          backgroundColor: headerColor,
          color: headerTextColor,
        }}
      >
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:opacity-75 transition-opacity flex-shrink-0"
            onClick={() => router.back()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-semibold tracking-wider uppercase">
              {dayOfWeek}
            </span>
            <div className="h-1 w-full pr-8 bg-yellow-500 mt-1 rounded"></div>
          </div>
        </div>

        <div className="hidden sm:block">
          <span className="text-3xl sm:text-4xl font-extrabold tracking-widest">
            {pageTitle}
          </span>
        </div>
      </div>
    </header>
  );
}
