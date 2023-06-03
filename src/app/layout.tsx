import Image from "next/image";
import gameSearchLogo from "~/assets/gameSearch_logo.svg";
import { unbounded, dm_mono } from "~/app/fonts";
import "~/app/globals.css";

export const metadata = {
  title: "gameSearch",
  description: "Searching for games obviously.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${dm_mono.variable}`}>
      <body className={unbounded.className}>
        <header className="px-2 py-4 md:px-3 md:py-5 lg:px-5 lg:py-7 2xl:px-7 2xl:py-9 flex justify-start items-center">
          <Image
            src={gameSearchLogo}
            alt="gameSearch logo"
            className="aspect-auto w-48"
          />
        </header>
        {children}
      </body>
    </html>
  );
}
