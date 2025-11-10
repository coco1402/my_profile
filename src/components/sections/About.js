import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 font-[family-name:var(--font-montserrat)]">About <span className="underline decoration-4 decoration-black">Me</span></h2>
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
              Born in Shanghai, I moved to London as a teenager and then graduated from the London School of Economics with a BSc and an MSc, studying mathematics, economics, and finance. I now work at KPMG in London, focusing on technology-driven projects.
            </p>
            <p className="text-lg">
              I love exploring new cuisines, from trendy hotspots to hidden gems tucked away in local neighbourhoods. I also run regularly along the Thames, watching Tower Bridge through all four seasons and how the river changes with time and light.
            </p>
            <p className="text-lg">
              Outside of work, I like to code just for fun. This website is one of my personal projects — a space to capture the small moments of my twenties, memories that will only grow more precious with time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
