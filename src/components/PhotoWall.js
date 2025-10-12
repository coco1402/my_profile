'use client';

import { useRef } from 'react';

export default function PhotoWall() {
  const scrollContainerRef = useRef(null);

  const photos = [
    { id: 1, src: '/assets/photography/DSCF1105.JPG', size: 'large' },
    { id: 2, src: '/assets/photography/DSCF1218.JPG', size: 'medium' },
    { id: 3, src: '/assets/photography/DSCF1510.JPG', size: 'medium' },
    { id: 4, src: '/assets/photography/DSCF1785.JPG', size: 'small' },
    { id: 5, src: '/assets/photography/DSCF2123.JPG', size: 'large' },
    { id: 6, src: '/assets/photography/DSCF2243.JPG', size: 'medium' },
    { id: 7, src: '/assets/photography/DSCF2249.JPG', size: 'medium' },
    { id: 8, src: '/assets/photography/DSCF2252.jpg', size: 'small' },
    { id: 9, src: '/assets/photography/DSCF2277.JPG', size: 'large' },
    { id: 10, src: '/assets/photography/DSCF2720.jpg', size: 'medium' },
    { id: 11, src: '/assets/photography/DSCF2855.JPG', size: 'large' },
    { id: 12, src: '/assets/photography/DSCF2942.jpg', size: 'medium' },
    { id: 13, src: '/assets/photography/DSCF3071.JPG', size: 'large' },
    { id: 14, src: '/assets/photography/DSCF3078.JPG', size: 'medium' },
    { id: 15, src: '/assets/photography/DSCF3326.jpg', size: 'medium' },
    { id: 16, src: '/assets/photography/DSCF3368.JPG', size: 'small' },
    { id: 17, src: '/assets/photography/DSCF3425.jpg', size: 'large' },
    { id: 18, src: '/assets/photography/DSCF3440.JPG', size: 'medium' },
    { id: 19, src: '/assets/photography/DSCF3653.jpg', size: 'medium' },
    { id: 20, src: '/assets/photography/DSCF3928.JPG', size: 'large' },
    { id: 21, src: '/assets/photography/DSCF3945.JPG', size: 'medium' },
    { id: 22, src: '/assets/photography/DSCF4640.JPG', size: 'large' },
    { id: 23, src: '/assets/photography/DSCF5044.JPG', size: 'medium' },
    { id: 24, src: '/assets/photography/DSCF5761.JPG', size: 'small' },
    { id: 25, src: '/assets/photography/DSCF5831.JPG', size: 'large' },
    { id: 26, src: '/assets/photography/DSCF5972.JPG', size: 'medium' },
    { id: 27, src: '/assets/photography/FullSizeRender_VSCO.JPG', size: 'medium' },
    { id: 28, src: '/assets/photography/autumn.jpeg', size: 'large' },
  ];

  return (
    <section id="moments" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="underline decoration-4 decoration-black">Photography</span>
          </h2>
          <p className="text-xl text-gray-600">Exploring the Art of Light and Shadow</p>
        </div>

        {/* Horizontal Scrollable Gallery - Use mouse wheel or touch to scroll */}
        <div className="relative group">
          {/* Scrollable Container - 2 Rows - Supports wheel and touch scrolling */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e0 transparent',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="inline-flex flex-col gap-4 pr-8">
              {/* Row 1 */}
              <div className="flex gap-4">
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[600px] h-[380px]">
                  <img src={photos[0].src} alt="Photo 1" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[350px] h-[380px]">
                  <img src={photos[1].src} alt="Photo 2" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[500px] h-[380px]">
                  <img src={photos[2].src} alt="Photo 3" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[400px] h-[380px]">
                  <img src={photos[3].src} alt="Photo 4" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[550px] h-[380px]">
                  <img src={photos[4].src} alt="Photo 5" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[450px] h-[380px]">
                  <img src={photos[5].src} alt="Photo 6" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[600px] h-[380px]">
                  <img src={photos[6].src} alt="Photo 7" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[350px] h-[380px]">
                  <img src={photos[7].src} alt="Photo 8" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[500px] h-[380px]">
                  <img src={photos[8].src} alt="Photo 9" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[400px] h-[380px]">
                  <img src={photos[9].src} alt="Photo 10" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[550px] h-[380px]">
                  <img src={photos[10].src} alt="Photo 11" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[450px] h-[380px]">
                  <img src={photos[11].src} alt="Photo 12" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[600px] h-[380px]">
                  <img src={photos[12].src} alt="Photo 13" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[350px] h-[380px]">
                  <img src={photos[13].src} alt="Photo 14" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-4">
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[450px] h-[380px]">
                  <img src={photos[14].src} alt="Photo 15" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[600px] h-[380px]">
                  <img src={photos[15].src} alt="Photo 16" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[350px] h-[380px]">
                  <img src={photos[16].src} alt="Photo 17" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[500px] h-[380px]">
                  <img src={photos[17].src} alt="Photo 18" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[400px] h-[380px]">
                  <img src={photos[18].src} alt="Photo 19" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[550px] h-[380px]">
                  <img src={photos[19].src} alt="Photo 20" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[450px] h-[380px]">
                  <img src={photos[20].src} alt="Photo 21" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[600px] h-[380px]">
                  <img src={photos[21].src} alt="Photo 22" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[350px] h-[380px]">
                  <img src={photos[22].src} alt="Photo 23" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[500px] h-[380px]">
                  <img src={photos[23].src} alt="Photo 24" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[400px] h-[380px]">
                  <img src={photos[24].src} alt="Photo 25" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[550px] h-[380px]">
                  <img src={photos[25].src} alt="Photo 26" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[450px] h-[380px]">
                  <img src={photos[26].src} alt="Photo 27" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[600px] h-[380px]">
                  <img src={photos[27].src} alt="Photo 28" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instruction text */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          ← Scroll with mouse wheel or swipe to browse photos →
        </p>
      </div>
    </section>
  );
}
