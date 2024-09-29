import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaUser, FaBars, FaHome, FaInfoCircle, FaPhone, FaQuestionCircle, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const searchRef = useRef(null);
  const hamburgerRef = useRef(null);
  const userMenuRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
    setFilteredSurahs([]);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
    if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
      setIsHamburgerOpen(false);
    }
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setIsUserMenuOpen(false);
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      setIsSearchOpen(false);
      setIsHamburgerOpen(false);
      setIsUserMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (isSearchOpen || isHamburgerOpen || isUserMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling
    }
  }, [isSearchOpen, isHamburgerOpen, isUserMenuOpen]);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query) {
      axios.get('https://api.alquran.cloud/v1/surah')
        .then(response => {
          const filtered = response.data.data.filter(surah =>
            surah.englishName.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredSurahs(filtered);
        })
        .catch(error => {
          console.error('Error fetching surah data: ', error);
        });
    } else {
      setFilteredSurahs([]);
    }
  };

  return (
    <nav>
      <nav className={`left-0 h-16 z-50 bg-dgreen text-white flex justify-between items-center p-4 fixed top-0 w-full transition-transform duration-700 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center space-x-4">
          <FaBars className="cursor-pointer" onClick={toggleHamburger} />
          <a href="/" className="text-xl md:text-2xl font-bold">Quran.com</a>
        </div>
        <div className="flex items-center space-x-4">
          <div 
            ref={userMenuRef} 
            className="relative"
          >
            <FaUser 
              className="cursor-pointer"
              onClick={toggleUserMenu}
            />
            <div className={`absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg transition-opacity duration-300 ${isUserMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign In</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign Out</a>
            </div>
          </div>
          <FaSearch className="cursor-pointer" onClick={toggleSearch} />
        </div>
      </nav>
      <div ref={hamburgerRef} className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform duration-500 ${isHamburgerOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-50`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Menu</h2>
            <button onClick={toggleHamburger} className="text-xl">×</button>
          </div>
          <ul>
            <li className="mb-2 flex items-center border-b border-gray-200 pb-2">
              <FaHome className="mr-2" />
              <NavLink to='/' className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</NavLink>
            </li>
            <li className="mb-2 flex items-center border-b border-gray-200 pb-2">
              <FaInfoCircle className="mr-2" />
              <NavLink to='/about' className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About</NavLink>
            </li>
            <li className="mb-2 flex items-center border-b border-gray-200 pb-2">
              <FaPhone className="mr-2" />
              <NavLink to='/contact' className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</NavLink>
            </li>
            <li className="mb-2 flex items-center border-b border-gray-200 pb-2">
              <FaQuestionCircle className="mr-2" />
              <NavLink to='/help' className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Help</NavLink>
            </li>
            <li className="mb-2 flex items-center border-b border-gray-200 pb-2">
              <FaLock className="mr-2" />
              <NavLink to='/privacy' className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Privacy</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div ref={searchRef} className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform duration-500 ${isSearchOpen ? 'translate-x-0' : 'translate-x-full'} w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 z-50`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Search</h2>
            <button onClick={toggleSearch} className="text-xl">×</button>
          </div>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="mt-4">
            {filteredSurahs.map(surah => (
              <NavLink 
                key={surah.number} 
                to={`/${surah.number}`} 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={toggleSearch}
              >
                {surah.englishName}
              </NavLink>
            ))}
            {searchQuery && filteredSurahs.length === 0 && (
              <p className="text-gray-600">No results found.</p>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
