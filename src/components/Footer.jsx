import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-dgreen text-white text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col gap-12 md:flex-row justify-between">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <Link to="/">
            <div className="text-2xl tracking-wide">Quran</div>
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <span className="font-semibold">llameessss@gmail.com</span>
          <span className="font-semibold">+91 8086026851</span>
          <div className="flex gap-6">
            {/* Placeholder for social media icons */}
            {/* Add icons or remove the comment if needed */}
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-2">
              <Link to="">About Us</Link>
              <Link to="">Privacy</Link>
              <Link to="">Legal & Privacy</Link>
              <Link to="">Help</Link>
              <Link to="">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-lg">NETWORK</h1>
            <div className="flex flex-col gap-2">
              <Link to="">QuranicAudio.com</Link>
              <Link to="">Legacy.Quran.com</Link>
              <Link to="">QuranReflect.com</Link>
              <Link to="">Previous.Quran.com</Link>
              <Link to="">Sunnah.com</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-lg">SURAHS</h1>
            <div className="flex flex-col gap-2">
              <Link to="">Ayatul Kursi</Link>
              <Link to="">Yaseen</Link>
              <Link to="">Al Mulk</Link>
              <Link to="">Ar-Rahman</Link>
              <Link to="">Al Kahf</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h1 className="font-medium text-lg">QURAN.COM</h1>
          <p>
            Quran.com is a Sadaqah Jariyah. We hope to make it easy for everyone
            to read and learn The Noble Quran.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-2 w-3/4 rounded-md"
            />
            <button className="w-1/4 bg-lama text-white rounded-md">JOIN</button>
          </div>
          <span className="font-semibold">Secure</span>
          <div className="flex justify-between">
            {/* Placeholder for payment method icons */}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16">
        <div>© 2024 Quran.com. All Rights Reserved</div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div>
            <span className="text-gray-500 mr-2">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-2">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
