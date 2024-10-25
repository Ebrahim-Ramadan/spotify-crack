import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { useColor } from '../context/ColorContext';
import { useState } from 'react';

const playlists = [
  {
    title: "Today's Top Hits",
    description: "Jung Kook is on top of the Hottest 50!",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    color: "from-rose-900/95"
  },
  {
    title: "RapCaviar",
    description: "New music from Drake, Travis Scott and more",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    color: "from-purple-900/95"
  },
  {
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
    color: "from-blue-900/95"
  },
  {
    title: "Rock Classics",
    description: "Rock legends & epic songs",
    imageUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop",
    color: "from-emerald-900/95"
  },
  {
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
    imageUrl: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=300&h=300&fit=crop",
    color: "from-amber-900/95"
  }
];

export default function MainContent() {
  const { backgroundColor, setBackgroundColor } = useColor();
  const [selectedPlaylist, setSelectedPlaylist] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setIsPlaying(prev => !prev);
    setSelectedPlaylist(index);
  };

  const handlePlaylistClick = (index: number) => {
    setSelectedPlaylist(index);
    setBackgroundColor(playlists[index].color);
  };

  return (
    <div className={`flex-1 bg-gradient-to-b ${backgroundColor} via-black/90 to-black overflow-auto background-gradient`}>
      <div className="p-4 md:p-8 mb-20">
        <h1 className="text-2xl font-bold text-white mb-6">Good afternoon</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {playlists.slice(0, 6).map((playlist, index) => (
            <div 
              key={index} 
              onClick={() => handlePlaylistClick(index)}
              className={`flex items-center bg-white/5 hover:bg-white/10 playlist-hover-transition rounded-md overflow-hidden group cursor-pointer
                ${selectedPlaylist === index ? 'ring-2 ring-green-500' : ''}`}
              onMouseEnter={() => setBackgroundColor(playlist.color)}
              onMouseLeave={() => selectedPlaylist === index ? null : setBackgroundColor('from-indigo-900/95')}
            >
              <img 
                src={playlist.imageUrl} 
                alt={playlist.title} 
                className="w-20 h-20 playlist-hover-transition group-hover:brightness-110" 
              />
              <span className="text-white font-bold px-4 flex-1">{playlist.title}</span>
              <button 
                onClick={(e) => handlePlayClick(e, index)}
                className={`w-12 h-12 ${isPlaying && selectedPlaylist === index ? 'bg-green-400' : 'bg-green-500'} 
                         rounded-full flex items-center justify-center ml-auto mr-4 
                         opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 
                         playlist-hover-transition shadow-lg hover:scale-105 scale-transition`}
              >
                <Play className={`w-6 h-6 text-black ${isPlaying && selectedPlaylist === index ? 'opacity-80' : ''}`} />
              </button>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-6">Made for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {playlists.map((playlist, index) => (
            <div 
              key={index} 
              onClick={() => handlePlaylistClick(index)}
              className={`bg-white/5 p-4 rounded-md hover:bg-white/10 playlist-hover-transition group cursor-pointer
                ${selectedPlaylist === index ? 'ring-2 ring-green-500' : ''}`}
              onMouseEnter={() => setBackgroundColor(playlist.color)}
              onMouseLeave={() => selectedPlaylist === index ? null : setBackgroundColor('from-indigo-900/95')}
            >
              <div className="relative">
                <img 
                  src={playlist.imageUrl} 
                  alt={playlist.title} 
                  className="w-full aspect-square object-cover rounded-md mb-4 playlist-hover-transition group-hover:brightness-110 group-hover:shadow-xl" 
                />
                <button 
                  onClick={(e) => handlePlayClick(e, index)}
                  className={`w-12 h-12 ${isPlaying && selectedPlaylist === index ? 'bg-green-400' : 'bg-green-500'}
                           rounded-full flex items-center justify-center 
                           absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 
                           translate-y-3 group-hover:translate-y-0 playlist-hover-transition 
                           shadow-lg hover:scale-105 scale-transition`}
                >
                  <Play className={`w-6 h-6 text-black ${isPlaying && selectedPlaylist === index ? 'opacity-80' : ''}`} />
                </button>
              </div>
              <h3 className="text-white font-bold mb-1 group-hover:text-green-400 playlist-hover-transition">{playlist.title}</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 playlist-hover-transition">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}