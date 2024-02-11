import "./globals.css";
import clsx from "clsx";

export const metadata = {
  title: "BGJ2024",
  description: "Blind Game Jam 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={clsx(
          "p-10 w-full text-center",
          "dark:bg-black dark:text-slate-200"
        )}
      >
        {children}
      </body>
    </html>
  );
}
