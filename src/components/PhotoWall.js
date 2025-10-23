'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { photosData, getCountriesForGlobe } from '../data/photosData';
import { useLenis } from './layout/SmoothScroll';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function PhotoWall() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });
  const globeEl = useRef();
  const containerRef = useRef();
  const lenis = useLenis();

  const countries = getCountriesForGlobe();

  // Get all unique years
  const years = ['all'];
  Object.values(photosData).forEach(country => {
    country.photos.forEach(photo => {
      if (!years.includes(photo.year)) {
        years.push(photo.year);
      }
    });
  });
  years.sort((a, b) => {
    if (a === 'all') return -1;
    if (b === 'all') return 1;
    return b - a;
  });

  // Filter photos based on selected year
  const getFilteredPhotos = (countryData) => {
    if (selectedYear === 'all') return countryData.photos;
    return countryData.photos.filter(photo => photo.year === selectedYear);
  };

  const handleCountryClick = (country) => {
    const countryKey = Object.keys(photosData).find(
      key => photosData[key].name === country.country
    );
    if (countryKey) {
      setSelectedCountry(countryKey);
      setShowGallery(true);
    }
  };

  const closeGallery = () => {
    setShowGallery(false);
    setTimeout(() => setSelectedCountry(null), 300);
  };

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 600
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Stop Lenis smooth scroll when modal is open
  useEffect(() => {
    if (showGallery && lenis) {
      lenis.stop();
      return () => {
        lenis.start();
      };
    }
  }, [showGallery, lenis]);

  return (
    <section id="photography" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 text-white">
            A Map of <span className="underline decoration-4 decoration-blue-400">Memories</span>
          </h2>
          <p className="text-xl text-gray-300">Capturing moments from every place my camera has been</p>
        </div>

        {/* Year Filter */}
        <div className="flex justify-center gap-3 mb-8">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {year === 'all' ? 'All' : year}
            </button>
          ))}
        </div>

        {/* 3D Globe */}
        <div ref={containerRef} className="relative bg-slate-800/50 rounded-3xl overflow-hidden shadow-2xl mb-8">
          <div className="h-[600px] w-full relative flex items-center justify-center">
            <Globe
              ref={globeEl}
              width={dimensions.width}
              height={dimensions.height}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

              // Points for countries
              pointsData={countries}
              pointLat={d => d.lat}
              pointLng={d => d.lng}
              pointColor={() => '#60a5fa'}
              pointAltitude={0.01}
              pointRadius={0.5}
              pointLabel={d => `
                <div class="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-xl">
                  <div class="font-bold">${d.country}</div>
                  <div class="text-xs text-blue-400 mt-1">${d.photoCount} photos</div>
                </div>
              `}

              // Rings around points
              ringsData={countries}
              ringLat={d => d.lat}
              ringLng={d => d.lng}
              ringColor={() => hoveredCountry ? (t) => `rgba(96, 165, 250, ${1 - t})` : () => 'rgba(96, 165, 250, 0.3)'}
              ringMaxRadius={2}
              ringPropagationSpeed={2}
              ringRepeatPeriod={1000}

              onPointClick={handleCountryClick}
              onPointHover={country => setHoveredCountry(country ? country.country : null)}
            />

            {/* Instructions overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm">
              🌍 Click on a country to view photos
            </div>
          </div>
        </div>

        {/* Photo Gallery Modal */}
        {showGallery && selectedCountry && (
          <div className="fixed inset-0 z-50" onClick={closeGallery}>
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
            <div
              className="absolute inset-0 overflow-y-scroll p-4"
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-6xl mx-auto py-8 relative">
                  {/* Country Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-2xl relative">
                    {/* Close button */}
                    <button
                      onClick={closeGallery}
                      className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 cursor-pointer"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <h3 className="text-4xl font-bold mb-2">{photosData[selectedCountry].name}</h3>
                    <p className="text-sm mt-2 opacity-75">
                      {getFilteredPhotos(photosData[selectedCountry]).length} photos
                      {selectedYear !== 'all' && ` from ${selectedYear}`}
                    </p>
                  </div>

                  {/* Photos Grid */}
                  <div className="bg-slate-800 p-6 rounded-b-2xl">
                    {getFilteredPhotos(photosData[selectedCountry]).length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {getFilteredPhotos(photosData[selectedCountry]).map((photo) => (
                          <div
                            key={photo.id}
                            className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                          >
                            <Image
                              src={photo.src}
                              alt={`${photosData[selectedCountry].name} - ${photo.location}`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <p className="font-semibold">{photo.location}</p>
                                <p className="text-sm text-gray-300">{photo.year}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-400">
                        No photos from {selectedYear} in {photosData[selectedCountry].name}
                      </div>
                    )}
                  </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
