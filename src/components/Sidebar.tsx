import { useState } from 'react';
import { Home, Search, Library, Plus, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const playlists = [
  "Discover Weekly", "Release Radar", "Daily Mix 1", "Daily Mix 2", 
  "Daily Mix 3", "Liked Songs", "Your Episodes", "2023 Wrapped",
  "Summer Hits", "Workout Mix", "Chill Vibes", "Road Trip",
  "Party Anthems", "90s Hits", "Study Music", "Gaming Mix"
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 top-4 ${isOpen ? 'left-64' : 'left-4'} md:hidden bg-black/90 p-2 rounded-full transition-all duration-300`}
      >
        {isOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        fixed md:static z-40 w-64 bg-black h-[calc(100vh-5rem)] flex flex-col 
        transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-2xl">♪</span>
            </span>
            Spotify
          </div>
        </div>
        
        <nav className="px-2">
          <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white px-4 py-3 transition rounded-md hover:bg-white/10">
            <Home className="w-6 h-6" />
            Home
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white px-4 py-3 transition rounded-md hover:bg-white/10">
            <Search className="w-6 h-6" />
            Search
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white px-4 py-3 transition rounded-md hover:bg-white/10">
            <Library className="w-6 h-6" />
            Your Library
          </a>
        </nav>
        
        <div className="mt-6 px-6">
          <button className="w-full flex items-center gap-2 text-gray-300 hover:text-white py-2 transition">
            <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center group-hover:bg-gray-700 transition">
              <Plus className="w-5 h-5" />
            </div>
            Create Playlist
          </button>
          <button className="w-full flex items-center gap-2 text-gray-300 hover:text-white py-2 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-md flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            Liked Songs
          </button>
        </div>
        
        <div className="mt-4 px-2 flex-1 overflow-y-auto">
          <div className="border-t border-gray-800 py-4 px-4">
            {playlists.map((playlist, index) => (
              <button 
                key={index}
                onClick={() => {/* Playlist click handler will be added */}}
                className="w-full text-left text-sm text-gray-400 hover:text-white py-2 transition-colors rounded-md hover:bg-white/10 px-2"
              >
                {playlist}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}