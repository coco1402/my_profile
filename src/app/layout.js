import { Lato, Montserrat, Londrina_Solid } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import PreLoader from "@/components/layout/PreLoader";

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  weight: ['700', '900'],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const londrinaSolid = Londrina_Solid({
  weight: ['900'],
  subsets: ["latin"],
  variable: "--font-londrina-solid",
});

const rainbowColors = localFont({
  src: "../../public/rainbow-colors-font/RainbowColorsRegular-yaq2.ttf",
  variable: "--font-rainbow-colors",
  display: "swap",
  weight: "400",
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
        className={`${lato.variable} ${montserrat.variable} ${londrinaSolid.variable} ${rainbowColors.variable} font-sans antialiased`}
      >
        <PreLoader />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
