import router from "next/router";

// src/app/components/minicurso/MinicursoHeader.tsx
interface MinicursoHeaderProps {
  readonly dayOfWeek: string;
  readonly pageTitle: string;
}

export default function MinicursoHeader({
  dayOfWeek,
  pageTitle,
}: MinicursoHeaderProps) {
  return (
    <header>
      <div className="w-full bg-[#0e1526] text-white p-8 flex justify-between items-center">
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => router.back()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <div className="flex flex-col mt-2 ml-15">
            <span className="text-3xl semi-bold tracking-wider uppercase">
              {dayOfWeek}
            </span>
            <div className="h-1 w-full bg-yellow-500 mt-1 rounded"></div>
          </div>
        </div>

        <div>
          <span className="text-4xl extrabold tracking-widest">
            {pageTitle}
          </span>
        </div>
      </div>
    </header>
  );
}
