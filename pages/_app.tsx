import { lowerCase } from "lodash";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-wrapper bg-gray-100 h-screen">
      <nav className="flex sm:justify-start space-x-4 bg-blue-400">
        {[
          ["Home", "/"],
          ["Nominate", "/nominate"],
        ].map(([title, url]) => (
          <a
            key={lowerCase(title)}
            href={url}
            className="rounded-md px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
      <div className="px-3">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
