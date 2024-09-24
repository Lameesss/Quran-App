import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Cards = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    // Fetch surah data from the API
    axios.get('http://api.alquran.cloud/v1/surah')
      .then(response => {
        // Extract Surah data from the API response
        const surahData = response.data.data.map(surah => ({
          number: surah.number,
          englishName: surah.englishName,
          arabicName: surah.name.replace('سُورَةُ ', ''), // Remove the prefix "سُورَةُ"
          translation: surah.englishNameTranslation, // Fetch the English name translation if available
          numberOfAyahs: surah.numberOfAyahs // Get the number of Ayahs
        }));
        setSurahs(surahData);
      })
      .catch(error => {
        console.error('Error fetching surah data: ', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-8 md:p-16 lg:p-24 xl:p-44 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {surahs.map((surah) => (
          <NavLink key={surah.number} to={`/${surah.number}`} className="hover:no-underline">
            <div className="bg-dgreen border border-gray-500 shadow-md p-4 h-full flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="bg-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-dgreen text-xs sm:text-sm font-bold">
                      {surah.number}
                    </div>
                    <h2 className="ml-2 sm:ml-3 text-sm sm:text-lg font-bold text-white">
                      {surah.englishName}
                    </h2>
                  </div>
                  {/* English translation directly below the English surah name */}
                  <p className="ml-8 sm:ml-11 text-xs sm:text-sm text-gray-300">{surah.translation || 'No translation available'}</p>
                </div>
                {/* Arabic name with Ayah count directly below */}
                <div className="text-right">
                  <h2 className="text-sm sm:text-lg font-bold text-white" style={{ fontFamily: 'Amiri, serif' }}>
                    {surah.arabicName}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400">{surah.numberOfAyahs} Ayahs</p>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Cards;
