import { Unbounded, DM_Mono } from "next/font/google";

export const unbounded = Unbounded({
  subsets: ["latin-ext"],
  variable: "--font-unbounded",
});

export const dm_mono = DM_Mono({
  subsets: ["latin-ext"],
  weight: ["300", "500"],
  variable: "--font-db-mono",
});
