import "./globals.css";
import { DM_Sans, Orbitron, Space_Mono } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Bc Era Co",
  description: "Bc Era Co — Bridging Traditional Online Shopping with Blockchain Innovation",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.className} ${orbitron.className} ${spaceMono.className}`}>
      <body>{children}</body>
    </html>
  );
}