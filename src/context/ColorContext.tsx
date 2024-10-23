import React, { createContext, useContext, useState, useCallback } from 'react';

type ColorContextType = {
  setBackgroundColor: (color: string) => void;
  backgroundColor: string;
};

const ColorContext = createContext<ColorContextType>({
  setBackgroundColor: () => {},
  backgroundColor: 'from-indigo-900',
});

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [backgroundColor, setBackgroundColorState] = useState('from-indigo-900');

  const setBackgroundColor = useCallback((color: string) => {
    setBackgroundColorState(color);
  }, []);

  return (
    <ColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export const useColor = () => useContext(ColorContext);