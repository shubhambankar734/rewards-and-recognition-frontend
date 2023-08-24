import { lowerCase } from "lodash";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-wrapper">
      <nav className="flex sm:justify-start space-x-4">
        {[
          ["Home", "/"],
          ["Page 2", "/page2"],
        ].map(([title, url]) => (
          <a
            key={lowerCase(title)}
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
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
