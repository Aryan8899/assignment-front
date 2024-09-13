import React, { useState } from "react";
import { Sun, Moon, Globe, Bell, Menu } from "lucide-react";

const TopBar = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  const [language, setLanguage] = useState("English");

  return (
    <div className={`flex items-center justify-between p-4 shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <button onClick={toggleSidebar} className="lg:hidden">
        <Menu size={24} />
      </button>
      
      <div className="flex items-center w-full max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          className={`border rounded-lg p-2 w-full shadow-sm focus:ring focus:ring-purple-200 ${
            darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative group hidden sm:block">
          <button className={`p-2 hover:text-purple-600 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <Globe size={20} />
          </button>
          <div className={`absolute shadow-lg rounded-lg mt-2 right-0 p-2 text-sm hidden group-hover:block z-50 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            {["English", "French", "Arabic", "German"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`block w-full text-left px-2 py-1 hover:bg-purple-100 ${darkMode ? 'hover:text-gray-800' : ''}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`p-2 hover:text-purple-600 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className={`p-2 hover:text-purple-600 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <Bell size={20} />
        </button>

        <div className="relative hidden sm:block">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-gray-200"
          />
          <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 border-2 border-white"></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
