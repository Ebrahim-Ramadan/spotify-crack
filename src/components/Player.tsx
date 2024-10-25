import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart, Mic2, ListMusic, MonitorSpeaker, Volume1, VolumeX } from 'lucide-react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [progress, setProgress] = useState(33);
  const [isLiked, setIsLiked] = useState(false);

  const formatTime = (percentage: number) => {
    const totalSeconds = (percentage / 100) * 225; // 3:45 in seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.round((x / rect.width) * 100);
    setVolume(Math.max(0, Math.min(100, percentage)));
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.round((x / rect.width) * 100);
    setProgress(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="md:h-20 h-44 bg-black/95 border-t border-gray-800/60 fixed bottom-0 w-full px-4 backdrop-blur-lg">
      <div className="flex items-center justify-between h-full max-w-screen-2xl mx-auto md:flex-row flex-col [&>*]:w-full w-full py-2">
        <div className="flex items-center justify-center  md:w-[30%] w-full">
          <div className="group relative">
            <img 
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop" 
              alt="Album cover" 
              className="w-14 h-14 rounded shadow-lg group-hover:brightness-75 transition-all"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white transform -translate-y-1">
                <ListMusic className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-white text-sm hover:underline cursor-pointer">Shape of You</div>
            <div className="text-gray-400 text-xs hover:text-white hover:underline cursor-pointer">Ed Sheeran</div>
          </div>
          <button 
            className={`ml-4 text-${isLiked ? 'green-500' : 'gray-400'} hover:text-white transition-colors`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-green-500' : ''}`} />
          </button>
        </div>
        
        <div className="flex flex-col items-center  w-full px-4">
          <div className="flex items-center gap-4 mb-2">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? 
                <Pause className="w-5 h-5 text-black" /> : 
                <Play className="w-5 h-5 text-black translate-x-[1px]" />
              }
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="text-[11px] text-gray-400 w-[40px] text-right">{formatTime(progress)}</span>
            <div 
              className="h-1 bg-gray-800 rounded-full flex-grow relative group cursor-pointer"
              onClick={handleProgressChange}
            >
              <div 
                className="absolute h-1 bg-white group-hover:bg-green-500 rounded-full transition-colors"
                style={{ width: `${progress}%` }}
              />
              <div 
                className="absolute h-3 w-3 bg-white rounded-full -top-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
              />
            </div>
            <span className="text-[11px] text-gray-400 w-[40px]">3:45</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 min-w-[180px] w-[30%] justify-end">
          <button className="text-gray-400 hover:text-white p-2">
            <Mic2 className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white p-2">
            <ListMusic className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white p-2">
            <MonitorSpeaker className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white p-2">
            {volume === 0 ? <VolumeX className="w-4 h-4" /> :
             volume < 50 ? <Volume1 className="w-4 h-4" /> :
             <Volume2 className="w-4 h-4" />}
          </button>
          <div 
            className="w-24 h-1 bg-gray-800 rounded-full relative group cursor-pointer"
            onClick={handleVolumeChange}
          >
            <div 
              className="absolute h-1 bg-white group-hover:bg-green-500 rounded-full transition-colors"
              style={{ width: `${volume}%` }}
            />
            <div 
              className="absolute h-3 w-3 bg-white rounded-full -top-1 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `${volume}%`, transform: 'translateX(-50%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}