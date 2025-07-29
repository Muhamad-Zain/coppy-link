import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coppy Link",
  description: "Undangan Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1200px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
