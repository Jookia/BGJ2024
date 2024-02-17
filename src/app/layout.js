import "./globals.css";
import clsx from "clsx";
import GameOutput from "@/components/GameOutput";

export const metadata = {
  title: "BGJ2024",
  description: "Blind Game Jam 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "p-10 w-full text-center",
          "dark:bg-black dark:text-slate-200",
        )}
      >
        <h1 className="text-3xl font-bold underline">BGJ2024</h1>
        <GameOutput />
      </body>
    </html>
  );
}
