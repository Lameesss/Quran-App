import React from 'react';

const Help = () => {
  return (
    <div className='pt-16 p-4 md:p-8 lg:p-16 text-dgreen'>
      <div className='max-w-4xl mx-auto'>
        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Help Center</h2>
          <p className='text-base md:text-lg mb-4'>
            Please check the FAQ below to see if your question has already been answered. If needed, you can contact us, and we'll do our best to get back to you as soon as possible. Just so you know, we're a small team, so please be nice.
          </p>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>Can I download Quran.com to my computer?</h3>
              <p className='text-base md:text-lg'>
                Unfortunately, no. We do not provide functionality to download our website or the Quran to your computer yet. You can, however, install our mobile app for offline reading.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>Can I browse the site in other languages?</h3>
              <p className='text-base md:text-lg'>
                To change your preferred language, use the dropdown on the top right corner of each page (top left corner on right-to-left languages). Choose your preferred language from there.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>I found a translation bug, where do I file it?</h3>
              <p className='text-base md:text-lg'>
                Please report this bug <a href='/report-bug' className='text-blue-400 hover:underline'>here</a>, and we will fix it as soon as possible, inshaAllah.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>The site is not working, how do I tell you?</h3>
              <p className='text-base md:text-lg'>
                If the site is not working at all or you see a white screen with the text 'Sorry, something went wrong,' please report it <a href='/report-issue' className='text-blue-400 hover:underline'>here</a>.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>I'm a developer. How can I contribute?</h3>
              <p className='text-base md:text-lg'>
                Please see our <a href='/developers' className='text-blue-400 hover:underline'>developers page</a> for more info.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>Islamic/Fiqh/Fatwa related questions</h3>
              <p className='text-base md:text-lg'>
                Quran.com is an online reading, listening, and studying tool. The team behind Quran.com consists of software engineers, designers, and product managers. We do not have scholars, imams, or sheikhs as part of the team for Islamic, Fiqh, or Fatwa related questions. We advise you speak to your local imam or a sheikh.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>Is Tafsir available?</h3>
              <p className='text-base md:text-lg'>
                Yes, we do have some Tafsirs. Click on the icon shown beside each ayah, then click on Tafsirs. The app will show you a list of available Tafsirs. Click on the Tafsir you want to read.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>Add another translation</h3>
              <p className='text-base md:text-lg'>
                Open a new issue <a href='/add-translation' className='text-blue-400 hover:underline'>here</a> with all the details, including a link to the translation, and we'll try our best to add it.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>Adding more reciters</h3>
              <p className='text-base md:text-lg'>
                Submit more info about this reciter <a href='/add-reciter' className='text-blue-400 hover:underline'>here</a>.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>Does Quran.com have a mobile app?</h3>
              <p className='text-base md:text-lg'>
                Yes! Please visit our <a href='/mobile-apps' className='text-blue-400 hover:underline'>mobile apps page</a> for more info.
              </p>
            </div>
          </div>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Feedback</h2>
          <p className='text-base md:text-lg mb-4'>
            We value your feedback! If you have any suggestions or comments about our site or services, please let us know.
          </p>
          <p className='text-base md:text-lg'>
            <a href='/feedback' className='text-blue-400 hover:underline'>Submit Feedback</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Help;
