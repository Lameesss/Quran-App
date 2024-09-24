import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    axios.get('http://api.alquran.cloud/v1/quran/quran-uthmani')
      .then(response => {
        // Extract surah names and ayah texts from the response data
        const surahData = response.data.data.surahs.map(surah => ({
          number: surah.number,
          name: surah.englishName,
          ayahs: surah.ayahs.map(ayah => ({
            hizbQuarter: ayah.hizbQuarter,
            text: ayah.text
          }))
        }));
        setSurahs(surahData);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Surahs and Ayah Texts</h2>
      {surahs.map((surah, index) => (
        <div key={index}>
          <h3>{surah.number}. {surah.name}</h3>
          <ul>
            {surah.ayahs.map((ayah, ayahIndex) => (
              <li key={ayahIndex}>
                <strong>{ayah.hizbQuarter}</strong>. {ayah.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Api;
