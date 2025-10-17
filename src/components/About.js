'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">About <span className="underline decoration-4 decoration-black">Me</span></h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="w-full aspect-square rounded-3xl mb-8 overflow-hidden shadow-xl">
              <Image
                src="/profile/DSCF1877.JPG"
                alt="Profile photo"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed flex flex-col justify-center">
            <p className="text-lg">
              Born in Shanghai, I moved to London as a teenager and graduated from the London School of Economics in 2022 with a BSc and an MSc, studying mathematics, economics, and finance. I now work at KPMG in London, focusing on technology-driven projects.
            </p>
            <p className="text-lg">
              I love traveling and exploring new cuisines, often bringing my camera along to capture the places I visit and the food I try. I also enjoy running — I've seen Tower Bridge through all four seasons and watched how the Thames changes with time and light.
            </p>
            <p className="text-lg">
              Outside of work, I like creating small projects just for fun. This website began as one of them — a space to keep small moments and reflections that might mean even more years later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
