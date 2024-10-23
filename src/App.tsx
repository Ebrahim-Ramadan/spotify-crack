import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import MainContent from './components/MainContent';
import { ColorProvider } from './context/ColorContext';

function App() {
  return (
    <ColorProvider>
      <div className="h-screen flex flex-col bg-black">
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <MainContent />
        </div>
        <Player />
      </div>
    </ColorProvider>
  );
}

export default App;