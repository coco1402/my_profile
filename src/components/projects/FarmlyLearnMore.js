"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InteractiveMockup from "./InteractiveMockup";
import RTMDemo from "./RTMDemo";

export default function FarmlyLearnMore() {
  useEffect(() => {
    // Scroll to top immediately and override browser's scroll restoration
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Also scroll after a brief delay to ensure it takes effect
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#fafaf8] to-[#f1f5f9] font-[family-name:var(--font-montserrat)]">
      {/* Hero */}
      <div className="min-h-screen flex flex-col justify-center items-center px-6 py-32">
        <div className="max-w-[820px] w-full text-center">
          <p className="text-sm tracking-[0.18em] uppercase text-gray-500 mb-8 font-medium">
            Full-Stack Project
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.05] font-[family-name:var(--font-montserrat)]">
            Local Farms, One Tap Away
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-16">Farmly</p>

          <div className="mb-16 max-w-[680px] mx-auto">
            <ul className="flex justify-center gap-3 mb-3">
              {["#React Native", "#Node.js", "#MongoDB"].map((t) => (
                <li key={t} className="px-4 py-2.5 bg-[#f1f5f9] text-gray-900 text-sm font-semibold rounded-xl shadow-sm">
                  {t}
                </li>
              ))}
            </ul>
            <ul className="flex justify-center gap-3">
              {["#Firebase", "#Express"].map((t) => (
                <li key={t} className="px-4 py-2.5 bg-[#f1f5f9] text-gray-900 text-sm font-semibold rounded-xl shadow-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://github.com/coco1402/farmly-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#22c55e] text-white text-lg font-extrabold rounded-xl hover:bg-[#16a34a] transition-all duration-150 shadow-[0_6px_18px_rgba(34,197,94,0.25)] hover:shadow-[0_8px_22px_rgba(22,163,74,0.28)] active:scale-[0.995] active:translate-y-[1px]"
          >
            View Repository
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Overview */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-montserrat)]">Overview</h2>
          <div className="prose prose-xl max-w-none text-gray-700 mb-8">
            <p className="text-2xl leading-loose mb-6 font-normal font-[family-name:var(--font-lato)]">
              <span className="font-bold text-gray-900">Farmly</span> is a mobile marketplace that connects local farmers and customers, enabling real-time communication, and trade of fresh produce.
            </p>
            <p className="text-2xl leading-loose mb-6 font-normal font-[family-name:var(--font-lato)]">
              Built with <span className="font-bold text-gray-900">React Native</span> and <span className="font-bold text-gray-900">Node.js</span>, it features <span className="font-bold text-gray-900">role-specific interfaces</span> tailored to each user type.
            </p>
            <p className="text-2xl leading-loose font-normal font-[family-name:var(--font-lato)]">
              Developed by a team of four as our Bootcamp capstone project, the goal of the app is to make local agriculture more accessible and strengthen the connection between producers and consumers.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-64 md:w-80 bg-white rounded-3xl shadow-2xl p-4">
              <Image src="/Farmly/Login.png" alt="Farmly App Login Screen" width={320} height={600} className="w-full h-auto rounded-2xl" />
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">Login Page</p>
          </div>
        </section>

        {/* === Target Users & Role-based Access === */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-montserrat)]">Target Users</h2>

          <div className="mb-12">
            <p className="text-2xl text-gray-700 leading-loose mb-6 font-normal font-[family-name:var(--font-lato)]">
              Farmly connects the people who grow food with the people who love it. Farmers, shoppers, and guests each get their own tailored experience.
            </p>
            <p className="text-2xl text-gray-700 leading-loose mb-6 font-normal font-[family-name:var(--font-lato)]">
              Check out the table below to see what each role can do.
            </p>

            {/* Permissions table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-base">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="px-6 py-4 text-left font-bold text-gray-900 font-[family-name:var(--font-montserrat)]">Capability</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900 font-[family-name:var(--font-montserrat)]">Farmers</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900 font-[family-name:var(--font-montserrat)]">Customers</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900 font-[family-name:var(--font-montserrat)]">Guests</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Browse farms", true, true, true],
                    ["Message", true, true, false],
                    ["Create/manage farm", true, false, false],
                    ["List produce", true, false, false],
                    ["Purchase / CTA", false, true, false],
                  ].map((row, idx) => (
                    <tr key={row[0]} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}>
                      <td className="px-6 py-4 font-medium text-gray-900 font-[family-name:var(--font-lato)]">{row[0]}</td>
                      {[1, 2, 3].map((i) => (
                        <td key={i} className="px-6 py-4 text-center">
                          {row[i] ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-4 italic font-[family-name:var(--font-lato)]">UI routes & actions are gated by role on both client and server.</p>
            </div>
          </div>

          {/* Getting started */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting started</h3>
            <p className="text-2xl text-gray-700 leading-loose mb-8 font-normal font-[family-name:var(--font-lato)]">
              Choose your role during signup to unlock the right features for you.
            </p>

            {/* Interactive carousel */}
            <InteractiveMockup />
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-montserrat)]">How it Works</h2>

          {/* Architecture Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Architecture Overview</h3>
            <p className="text-2xl text-gray-700 leading-loose font-normal font-[family-name:var(--font-lato)]">
              Farmly is built with a hybrid backend model combining <span className="font-bold text-gray-900">Firebase</span> for authentication and real-time features, and <span className="font-bold text-gray-900">MongoDB</span> for core data storage. This setup allows seamless messaging, fast lookups, and scalable data handling.
            </p>
          </div>

          {/* Real-Time Messaging */}
          <div className="mb-12">
            <RTMDemo />
          </div>

          {/* Location-based Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Location-based Features</h3>
            <p className="text-2xl text-gray-700 leading-loose font-normal font-[family-name:var(--font-lato)]">
              The app uses <span className="font-bold text-gray-900">Postcodes.io</span> for geolocation, automatically sorting farms by proximity so customers can easily discover nearby producers.
            </p>
          </div>
        </section>

        {/* View Other Projects Button */}
        <div className="flex justify-center pt-12 pb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#22c55e] text-white text-lg font-extrabold rounded-xl hover:bg-[#16a34a] transition-all duration-150 shadow-[0_6px_18px_rgba(34,197,94,0.25)] hover:shadow-[0_8px_22px_rgba(22,163,74,0.28)] active:scale-[0.995] active:translate-y-[1px]"
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
