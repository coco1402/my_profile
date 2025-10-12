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
  title: "Coco Shen - Full Stack Engineer | Portfolio",
  description: "Full Stack Engineer based in London with expertise in JavaScript, React, Python, Node.js, and Azure. Explore my projects, experience, and skills.",
  keywords: "Full Stack Engineer, Software Developer, React, Python, JavaScript, Node.js, London, Portfolio, Web Development",
  authors: [{ name: "Siqi (Coco) Shen" }],
  openGraph: {
    title: "Coco Shen - Full Stack Engineer",
    description: "Full Stack Engineer specializing in React, Python, and modern web technologies",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
