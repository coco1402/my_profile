"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioLearnMore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#fafaf8] to-[#f1f5f9] font-[family-name:var(--font-montserrat)]">
      {/* Hero */}
      <div className="min-h-screen flex flex-col justify-center items-center px-6 py-32">
        <div className="max-w-[820px] w-full text-center">
          <p className="text-sm tracking-[0.18em] uppercase text-gray-500 mb-8 font-medium">
            Frontend Project
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.05] font-[family-name:var(--font-montserrat)]">
            My Portfolio Website
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-16">Blog</p>

          <div className="mb-16 max-w-[680px] mx-auto">
            <ul className="flex justify-center gap-3 mb-3">
              {["#Next.js", "#React", "#Tailwind CSS"].map((t) => (
                <li key={t} className="px-4 py-2.5 bg-[#f1f5f9] text-gray-900 text-sm font-semibold rounded-xl shadow-sm">
                  {t}
                </li>
              ))}
            </ul>
            <ul className="flex justify-center gap-3">
              {["#Lenis", "#Framer Motion"].map((t) => (
                <li key={t} className="px-4 py-2.5 bg-[#f1f5f9] text-gray-900 text-sm font-semibold rounded-xl shadow-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://github.com/coco1402/my_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#7c3aed] text-white text-lg font-extrabold rounded-xl hover:bg-[#6d28d9] transition-all duration-150 shadow-[0_6px_18px_rgba(124,58,237,0.25)] hover:shadow-[0_8px_22px_rgba(109,40,217,0.28)] active:scale-[0.995] active:translate-y-[1px]"
          >
            View Repository
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Hero Image */}
        <div className="mb-20">
          <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
            <Image src="/Portfolio/hero.png" alt="Portfolio Website Hero" width={1200} height={675} className="w-full h-auto" />
          </div>
          <p className="text-sm text-gray-500 mt-4 italic">Portfolio Website Homepage</p>
        </div>

        {/* Overview */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-montserrat)]">Overview</h2>
          <div className="prose prose-xl max-w-none text-gray-700 mb-8">
            <p className="text-2xl leading-loose mb-6 font-normal font-[family-name:var(--font-lato)]">
              The initial motivation to create this website was simple — I wanted a place to showcase my work and document the milestones and memories of my twenties. As I started looking for inspirations online and exploring the various web development frameworks, I became most curious about <span className="font-bold text-gray-900">Next.js</span>. I was drawn to the idea of <span className="font-bold text-gray-900">server-side rendering</span> as it enables faster loading and smoother visual presentation across devices. I felt that it would be great for displaying the photographs I&apos;ve taken over the past few years.
            </p>
            <p className="text-2xl leading-loose font-normal font-[family-name:var(--font-lato)]">
              I had never worked with Next.js before, but I said to myself why not challenging myself by learning it through building something on my own. So on a random weekend, I created a new repo on Github and started this project.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-montserrat)]">Key Features</h2>

          <div className="mb-12">
            <p className="text-2xl text-gray-700 leading-loose mb-6 font-normal font-[family-name:var(--font-lato)]">
I put everything inside a single page.js file when I first started. But as the site grew, it became clear that this structure would be hard to maintain and scale, so I began looking for better ways to organise the code. I was able to refactor the project into multiple routes and components. Thanks to Next.js’s detailed documentation and its file-system based routing, the process turned out to be much simpler than I expected.            </p>
            <p className="text-2xl text-gray-700 leading-loose mb-6 font-normal font-[family-name:var(--font-lato)]">
              After that, I began experimenting with animations. I first explored some React animation libraries, and later integrated <span className="font-bold text-gray-900">Lenis</span> for smoother scrolling and <span className="font-bold text-gray-900">Framer Motion</span> for page transitions. These additions helped the interactions feel more natural and continuous, improving the overall browsing experience.
            </p>
            <p className="text-2xl text-gray-700 leading-loose mb-6 font-normal font-[family-name:var(--font-lato)]">
              Of course, the development process had its challenges. Some features took considerable time and experimentation to get right. For example, implementing the page transitions required understanding Framer Motion&apos;s animation lifecycle and carefully coordinating the timing between route changes and visual effects. Similarly, integrating Lenis with Next.js&apos;s routing system needed careful attention to ensure smooth scrolling worked seamlessly across page navigations.
            </p>
            <p className="text-2xl text-gray-700 leading-loose font-normal font-[family-name:var(--font-lato)]">
              Although it took several weekends and multiple iterations, when I saw the animations finally come to life, the sense of accomplishment was truly fulfilling. I learned so much over the past few months. I now feel more comfortable designing and building static websites on my own. And even when I come across something unfamiliar, I&apos;m much more confident that by reading documentation, relying on online resources, I&apos;ll be able to figure it out.
            </p>
          </div>

        </section>

        {/* Deployment & Performance */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-montserrat)]">Deployment & Performance</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vercel Deployment</h3>
              <p className="text-2xl text-gray-700 leading-loose font-normal font-[family-name:var(--font-lato)]">
                Deployed on <span className="font-bold text-gray-900">Vercel</span> for optimal performance and seamless CI/CD integration. The platform provides automatic deployments, edge network distribution, and built-in analytics.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Performance optimisation</h3>
              <ul className="list-disc list-inside text-2xl text-gray-700 leading-loose space-y-2 ml-4 font-normal font-[family-name:var(--font-lato)]">
                <li>Image optimisation with WebP format and lazy loading</li>
                <li>Code splitting for reduced initial bundle size</li>
                <li>Font optimisation with variable fonts</li>
                <li>CSS optimisation with Tailwind's JIT compiler</li>
                <li>Animation performance with GPU acceleration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* View Other Projects Button */}
        <div className="flex justify-center pt-12 pb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#7c3aed] text-white text-lg font-extrabold rounded-xl hover:bg-[#6d28d9] transition-all duration-150 shadow-[0_6px_18px_rgba(124,58,237,0.25)] hover:shadow-[0_8px_22px_rgba(109,40,217,0.28)] active:scale-[0.995] active:translate-y-[1px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            View Other Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
