import React from 'react';

const About = () => {
  return (
    <div className='pt-16 p-4 md:p-8 lg:p-16 text-dgreen'>
      <div className='max-w-4xl mx-auto'>
        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>About Us</h2>
          <p className='text-base md:text-lg mb-4'>
            Quran.com was founded in 1995 with a mission to provide a comprehensive and accessible platform for studying and understanding the Quran. Our website is dedicated to making it easy for people worldwide to read, learn, and reflect on the Quranic text. We strive to support both new learners and advanced scholars with a range of tools and resources.
          </p>
          <p className='text-base md:text-lg mb-4'>
            The project is open-source and represents a collaborative effort between dedicated individuals and organizations. Our core team, along with contributions from the Tarteel team, works tirelessly to maintain and enhance the platform. We believe in the importance of preserving the Quran's integrity and making it accessible to all.
          </p>
          <p className='text-base md:text-lg mb-4'>
            Quran.com is built with the latest web technologies to ensure a smooth and user-friendly experience. Our platform offers features such as Arabic text display, translations in multiple languages, audio recitations, and more. We aim to provide an immersive experience for users to deepen their understanding of the Quran.
          </p>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Our Mission</h2>
          <p className='text-base md:text-lg mb-4'>
            Our mission is to facilitate Quranic education and promote a deeper connection with the text. We are committed to ensuring that users have access to accurate and reliable information. Our platform is designed to cater to diverse needs, including those of students, researchers, and everyday readers.
          </p>
          <p className='text-base md:text-lg mb-4'>
            We aim to bridge gaps in understanding and foster a global community of learners who can share and grow in their knowledge of the Quran. By leveraging technology, we strive to make the Quran accessible to people from all walks of life and to contribute to the preservation of this sacred text for future generations.
          </p>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Credits</h2>
          <ol className='list-decimal list-inside mb-4 text-base md:text-lg'>
            <li><strong>Tanzil:</strong> An international Quranic project aimed at providing a highly-verified precise Quran text.</li>
            <li><strong>QuranComplex:</strong> King Fahd Glorious Qur'an Printing Complex is a leader in serving the Glorious Qur’an and its Sciences, translating its Meanings, and safeguarding the Qur’anic Text from distortion, through the optimal use of advanced technologies in the field of printing, audio recordings, electronic publishing and digital applications.</li>
            <li><strong>Collin Fair:</strong> A tool for producing word-precise segmentation of recorded Qur'anic recitation.</li>
            <li><strong>QuranEnc:</strong> A portal featuring free and trustworthy translations of the meanings and exegeses of the noble Qur'an in many world languages.</li>
            <li><strong>Zekr:</strong> An open platform Quran study tool for browsing and researching on the Quran.</li>
            <li><strong>Lokalize:</strong> A computer-aided translation system that focuses on productivity and quality assurance and provides a seamless localization workflow.</li>
            <li><strong>Vercel:</strong> A deployment and collaboration platform for frontend developers which puts the frontend developer first, giving them comprehensive tools to build high-performance websites and applications.</li>
          </ol>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Our Values</h2>
          <p className='text-base md:text-lg mb-4'>
            At Quran.com, we uphold values of accuracy, inclusivity, and respect. We are dedicated to providing a platform that reflects the true essence of the Quran while embracing diverse interpretations and understandings. Our commitment is to ensure that all users have a respectful and enriching experience.
          </p>
          <p className='text-base md:text-lg mb-4'>
            We value community feedback and continuously work to improve our platform based on user needs and suggestions. Our goal is to create a space where users feel welcomed and supported in their journey of Quranic study and reflection.
          </p>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Get Involved</h2>
          <p className='text-base md:text-lg mb-4'>
            We welcome contributions from the community to help enhance our platform. Whether you have suggestions, want to volunteer, or wish to support us in other ways, we would love to hear from you. Your involvement helps us grow and serve the global community better.
          </p>
          <p className='text-base md:text-lg mb-4'>
            For more information on how to get involved, please visit our <a href='/contact' className='text-blue-400 hover:underline'>Contact</a> page or reach out to us through our social media channels.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
