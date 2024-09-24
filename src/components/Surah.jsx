import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Surah() {
  const { surahId } = useParams();
  const [surah, setSurah] = useState(null);
  const [view, setView] = useState('arabic');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchSurahData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`http://api.alquran.cloud/v1/surah/${surahId}`);
        const surahData = {
          number: response.data.data.number,
          name: response.data.data.name,
          ayahs: response.data.data.ayahs.map(ayah => ({
            numberInSurah: ayah.numberInSurah,
            text: ayah.text
          }))
        };

        const translationResponse = await axios.get('http://api.alquran.cloud/v1/quran/en.asad');
        const translationData = translationResponse.data.data.surahs[surahId - 1].ayahs.map(ayah => ({
          numberInSurah: ayah.numberInSurah,
          text: ayah.text
        }));

        setSurah({
          ...surahData,
          translation: translationData
        });

        const audioResponse = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/5/${surahId}`);
        setAudioUrl(audioResponse.data.audio_file.audio_url);

        setError(null);
      } catch (err) {
        setError('Error fetching data');
        console.error('Error fetching data: ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSurahData();
  }, [surahId]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const restartAudio = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-2xl text-dgreen font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-2xl text-dgreen font-semibold">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-8 pt-20">
      <div className="flex justify-between items-center mb-8">
        {/* Audio Control Buttons on the Left */}
        <div className="flex space-x-2 sm:space-x-4 w-full md:w-auto justify-start">
          {audioUrl && (
            <>
              <button
                onClick={toggleAudio}
                className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg rounded-md text-white font-semibold ${isPlaying ? 'bg-green' : 'bg-gray-300'}`}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button
                onClick={restartAudio}
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg rounded-md text-white font-semibold bg-green hover:bg-dgreen"
              >
                Restart
              </button>
            </>
          )}
        </div>

        {/* Arabic and Translation Buttons on the Right */}
        <div className="flex space-x-2 sm:space-x-4 w-full md:w-auto justify-end">
          <button
            onClick={() => setView('arabic')}
            className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg rounded-md text-white font-semibold ${view === 'arabic' ? 'bg-green' : 'bg-gray-300'}`}
          >
            Arabic
          </button>
          <button
            onClick={() => setView('translation')}
            className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg rounded-md text-white font-semibold ${view === 'translation' ? 'bg-green' : 'bg-gray-300'}`}
          >
            Translation
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-center text-green">
        <h2 className="text-4xl mb-8 font-bold" style={{ fontFamily: 'Amiri, serif' }}>
          {surah.name}
        </h2>
        <div className="text-xl leading-relaxed max-w-3xl pt-20">
          {surah.ayahs.map((ayah, index) => (
            <div key={index} className="mb-8 border-b border-gray-300 pb-6">
              <p className="mb-4 font-semibold" style={{ fontFamily: 'Amiri, serif', fontSize: '1.75rem' }} >
                <strong>{ayah.numberInSurah}</strong>. {ayah.text}
              </p>
              {view === 'translation' && surah.translation[index] && (
                <p className="text-lg font-semibold">
                  {surah.translation[index].text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} />
    </div>
  );
}

export default Surah;
