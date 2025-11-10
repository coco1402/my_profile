// Photo data organized by country and year
export const photosData = {
  // China - Shanghai
  China: {
    name: 'China',
    nameZh: '中国',
    coordinates: { lat: 31.2304, lng: 121.4737 }, // Shanghai coordinates
    photos: [
      { id: 1, src: '/assets/photography/2024_Shanghai_.JPG', year: 2024, location: 'Shanghai' },
      { id: 2, src: '/assets/photography/2024_Shanghai_Lujiazui.jpg', year: 2024, location: 'Shanghai - Lujiazui' },
      { id: 3, src: '/assets/photography/2024_Shanghai_Post_Office.JPG', year: 2024, location: 'Shanghai - Post Office' },
      { id: 4, src: '/assets/photography/2024_Shanghai_Street.jpg', year: 2024, location: 'Shanghai Street' },
      { id: 5, src: '/assets/photography/2024_Shanghai_theBund1.JPG', year: 2024, location: 'Shanghai - The Bund' },
      { id: 6, src: '/assets/photography/2024_Shanghai_theBund2.JPG', year: 2024, location: 'Shanghai - The Bund' },
      { id: 7, src: '/assets/photography/2024_Shanghai_Pork_Mooncake.JPG', year: 2024, location: 'Shanghai - Pork Mooncake' },
      { id: 8, src: '/assets/photography/2024_Shangha_cat.jpg', year: 2024, location: 'Shanghai - Cat' },
    ]
  },

  // 日本 - Tokyo
  Japan: {
    name: 'Japan',
    nameZh: '日本',
    coordinates: { lat: 35.6762, lng: 139.6503 }, // Tokyo coordinates
    photos: [
      { id: 9, src: '/assets/photography/2023_Tokyo_Nightview.jpg', year: 2023, location: 'Tokyo Night View' },
      { id: 10, src: '/assets/photography/2023_Tokyo_Tokyo_Tower.jpg', year: 2023, location: 'Tokyo Tower' },
    ]
  },

  // 英国 - London & Edinburgh
  UK: {
    name: 'United Kingdom',
    nameZh: '英国',
    coordinates: { lat: 51.5074, lng: -0.1278 }, // London coordinates
    photos: [
      { id: 11, src: '/assets/photography/2024_London_Primrose_Hill.JPG', year: 2024, location: 'London - Primrose Hill' },
      { id: 12, src: '/assets/photography/2024_London_Restaurant1.JPG', year: 2024, location: 'London Restaurant' },
      { id: 13, src: '/assets/photography/2024_London_Restaurant2.jpg', year: 2024, location: 'London Restaurant' },
      { id: 14, src: '/assets/photography/2024_London_St_Pauls.JPG', year: 2024, location: 'London - St Paul\'s Cathedral' },
      { id: 15, src: '/assets/photography/2025_London_Tower_Bridge.JPG', year: 2025, location: 'London - Tower Bridge' },
      { id: 16, src: '/assets/photography/2025_London_Richmond_Park.JPG', year: 2025, location: 'London - Richmond Park' },
      { id: 17, src: '/assets/photography/2025_London_Park.jpeg', year: 2025, location: 'London Park' },
      { id: 18, src: '/assets/photography/2024_Edinburgh_Street1.JPG', year: 2024, location: 'Edinburgh Street' },
      { id: 19, src: '/assets/photography/2024_Edinburgh_Street2.JPG', year: 2024, location: 'Edinburgh Street' },
    ]
  },

  // 法国 - Paris
  France: {
    name: 'France',
    nameZh: '法国',
    coordinates: { lat: 48.8566, lng: 2.3522 }, // Paris coordinates
    photos: [
      { id: 20, src: '/assets/photography/2024_Paris_Versailles.JPG', year: 2024, location: 'Versailles' },
      { id: 21, src: '/assets/photography/2024_Paris_Olympic_flame_balloon.jpg', year: 2024, location: 'Paris - Olympic Flame Balloon' },
    ]
  },

  // 意大利 - Florence
  Italy: {
    name: 'Italy',
    nameZh: '意大利',
    coordinates: { lat: 43.7696, lng: 11.2558 }, // Florence coordinates
    photos: [
      { id: 22, src: '/assets/photography/2025_Florence_Cafe.JPG', year: 2025, location: 'Florence Café' },
    ]
  },

  // 西班牙 - Barcelona
  Spain: {
    name: 'Spain',
    nameZh: '西班牙',
    coordinates: { lat: 41.3874, lng: 2.1686 }, // Barcelona coordinates
    photos: [
      { id: 23, src: '/assets/photography/2022_Barcelona_Sagrada_Familia.jpg', year: 2022, location: 'Barcelona - Sagrada Família' },
      { id: 24, src: '/assets/photography/2024_Barcelona_Statue_in_Tibidabo.JPG', year: 2024, location: 'Barcelona - Tibidabo' },
    ]
  },

  // 比利时 - Ghent
  Belgium: {
    name: 'Belgium',
    nameZh: '比利时',
    coordinates: { lat: 51.0543, lng: 3.7174 }, // Ghent coordinates
    photos: [
      { id: 25, src: '/assets/photography/2024_Ghent_Canel.JPG', year: 2024, location: 'Ghent Canal' },
      { id: 26, src: '/assets/photography/2024_Ghent_Streetview.JPG', year: 2024, location: 'Ghent Street View' },
      { id: 27, src: '/assets/photography/2024_Ghent_Cafe.JPG', year: 2024, location: 'Ghent Café' },
    ]
  },

  // 荷兰 - Amsterdam & Zaandam
  Netherlands: {
    name: 'Netherlands',
    nameZh: '荷兰',
    coordinates: { lat: 52.3676, lng: 4.9041 }, // Amsterdam coordinates
    photos: [
      { id: 28, src: '/assets/photography/2024_Amsterdam_Tulips.JPG', year: 2024, location: 'Amsterdam - Tulips' },
      { id: 29, src: '/assets/photography/2024_Zaandam.JPG', year: 2024, location: 'Zaandam' },
      { id: 30, src: '/assets/photography/2024_Zaandam_Applepie.JPG', year: 2024, location: 'Zaandam - Apple Pie' },
    ]
  },

  // 奥地利 - Salzburg
  Austria: {
    name: 'Austria',
    nameZh: '奥地利',
    coordinates: { lat: 47.8095, lng: 13.0550 }, // Salzburg coordinates
    photos: [
      { id: 31, src: '/assets/photography/2024_Salzburg.JPG', year: 2024, location: 'Salzburg' },
      { id: 32, src: '/assets/photography/2024_Salzburg_Carriage_ride.JPG', year: 2024, location: 'Salzburg - Carriage Ride' },
      { id: 33, src: '/assets/photography/2024_Salzburg_City_view.JPG', year: 2024, location: 'Salzburg - City View' },
      { id: 34, src: '/assets/photography/2024_Salzburg_Paraglider.JPG', year: 2024, location: 'Salzburg - Paragliding' },
      { id: 35, src: '/assets/photography/2024_Salzburg_moment.JPG', year: 2024, location: 'Salzburg Summit' },
    ]
  },

  // 挪威 - Norway
  Norway: {
    name: 'Norway',
    nameZh: '挪威',
    coordinates: { lat: 60.4720, lng: 8.4689 }, // Norway center coordinates
    photos: [
      { id: 36, src: '/assets/photography/2025_Norway_Fjord_homestead.JPG', year: 2025, location: 'Norwegian Fjord Homestead' },
      { id: 37, src: '/assets/photography/2025_Norway_Mountains.JPG', year: 2025, location: 'Norwegian Mountains' },
      { id: 38, src: '/assets/photography/2025_Bergen.JPG', year: 2025, location: 'Bergen' },
    ]
  },
};

// Get all countries for the globe
export const getCountriesForGlobe = () => {
  return Object.keys(photosData).map(key => ({
    country: photosData[key].name,
    countryZh: photosData[key].nameZh,
    lat: photosData[key].coordinates.lat,
    lng: photosData[key].coordinates.lng,
    photoCount: photosData[key].photos.length,
  }));
};

// Get photos by country
export const getPhotosByCountry = (countryKey) => {
  return photosData[countryKey] || null;
};

// Get all unique years
export const getAllYears = () => {
  const years = new Set();
  Object.values(photosData).forEach(country => {
    country.photos.forEach(photo => years.add(photo.year));
  });
  return Array.from(years).sort((a, b) => b - a);
};
